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

    public function store(ReservationRequest $request, $riad_id)
    {
        $validatedData = $request->validated();
        $riad = Riad::findOrFail($riad_id);
        $client = Client::where('user_id', Auth::id())->first();

        if (!$client) {
            return response()->json(['message' => 'Client not found.'], 404);
        }

        if ($riad->guests > $validatedData['guests']) {
            if ($riad->etat === 'Automatic') {
                Reservation::create([
                    'client_id' => $client->id,
                    'riad_id' => $riad->id,
                    'guests' => $validatedData['guests'],
                    'status' => 'Booked'
                ]);
                $riad->guests -= $validatedData['guests'];
                $riad->save();
                return response()->json(['message' => 'Your Reservation Has Been Confirmed']);
            } elseif ($riad->etat === 'Manual') {
                Reservation::create([
                    'client_id' => $client->id,
                    'riad_id' => $riad->id,
                    'guests' => $validatedData['guests'],
                    'status' => 'Available'
                ]);
                $riad->guests -= $validatedData['guests'];
                $riad->save();
                return response()->json(['message' => 'Your Reservation Is Pending Approval']);
            }
        } else {
            return response()->json(['message' => 'This Riad Is Already Fully Booked']);
        }
    }


}
