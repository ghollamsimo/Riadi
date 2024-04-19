<?php

namespace App\Http\Controllers;

use App\Models\DrRiad;
use App\Models\Reservation;
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
                ->where('status', '=' , 'Available')->get();
        }else{
            return response()->json(['message' => 'Unothorized']);
        }


        return response()->json($riads);
    }

    public function Reservationaccepted(Request $request ,$reservations ){
        $reservation = Reservation::findOrFail($reservations);
        $reservation->update([
            'status' => 'Booked',
        ]);
        return response()->json(['message' => 'Reservation Accesepted Successfully']);
    }

    public function destroy( $id ){
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();
        return response()->json(['message' => 'Reservation Deleted Successfully']);
    }
}
