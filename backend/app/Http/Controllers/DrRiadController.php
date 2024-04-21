<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\DrRiad;
use App\Models\Notification;
use App\Models\Reservation;
use App\Models\Riad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DrRiadController extends Controller
{

    public function index()
    {
        $user_id = Auth::id();
        $drriadid = DrRiad::where('user_id', $user_id)->first();
        if ($drriadid){
            $riads = Reservation::with('client.user','riad.drriad')
                ->where('status', '=' , 'Waiting')->get();
        }else{
            return response()->json(['message' => 'Unothorized']);
        }


        return response()->json($riads);
    }

    public function Reservationaccepted($reservationId) {
        $reservation = Reservation::findOrFail($reservationId);
        $clientId = $reservation->client_id;

        $reservation->update([
            'status' => 'Pending',
        ]);
        $reservation->load('riad');

        $riad = Riad::findOrFail($reservation->riad_id);

        Notification::create([
            'client_id' => $clientId,
            'riad_id' => $riad->id,
            'message' => 'Continue The Process of Payment for ' . $riad->name,
            'reservation_id' => $reservation->id
        ]);

        return response()->json(['message' => 'Reservation Pending For Client To Continue The Process Of Payment']);
    }


    public function ReservationRejected($reservations ){
        $reservation = Reservation::findOrFail($reservations);
        $clientId = $reservation->client_id;
        $reservation->load('riad');

        $reservation->update([
            'status' => 'Rejected',
        ]);

        $riad = Riad::findOrFail($reservation->riad_id);

        Notification::create([
            'client_id' => $clientId,
            'riad_id' => $riad->id,
            'message' => 'Your Reservation Has Been Rejected In ' . $riad->name,
            'reservation_id' => $reservation->id
        ]);
        return response()->json(['message' => 'Reservation Rejected Successfully']);
    }


}
