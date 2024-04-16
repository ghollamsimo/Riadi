<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationRequest;
use App\Models\Client;
use App\Models\Reservation;
use App\Models\Riad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReservationRequest $request , $riad_id)
    {
        $validateData = $request->validated();
        $riad = Riad::findOrFail($riad_id);
        $client = Client::where('user_id', Auth::id())->first();

        if ($riad->guests > $validateData['guests']){

            $stripeController = new StripeController();
            $paymentResponse = $stripeController->processPayment($request);

            if ($riad->etat === 'Automatic') {

                Reservation::create([
                    'client_id' => $client->id,
                    'riad_id' => $riad->id,
                    'guests' => $validateData['guests'],
                    'status' => 'Booked'
                ]);

                $riad->guests = -$validateData['guests'];
                $riad->save();

                return response()->json(['message' => 'Your Reservation Has Ben Confirmed']);
            }elseif ($riad->etat === 'Manual'){
                Reservation::create([
                    'client_id' => $client->id,
                    'riad_id' => $riad->id,
                    'guests' => $validateData['guests'],
                    'status' => 'Manual'
                ]);

                $riad->guests = -$validateData['guests'];
                $riad->save();
            }
            }else{
            return response()->json(['message' => 'This Riad Allredy Booked']);
        }
        return response()->json(['message' => 'Riad Is Not Disponible' ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reservation $reservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation)
    {
        //
    }
}
