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
        $user_id = Auth::user()->id;
        $drriadid = DrRiad::where('user_id', $user_id)->first();
        $riads = Reservation::with('client.user','riad.drriad')
            ->where('status', 'Available')->get();

        return response()->json($riads);
    }

    public function Reservationaccepted(Request $request ,$reservations ){
        $reservation = Reservation::findOrFail($reservations);
        $reservation->update([
            'status' => $request->status,
        ]);
        return response()->json(['message' => 'Reservation Accesepted Successfully']);
    }

    public function destroy( $id ){
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();
        return response()->json(['message' => 'Reservation Deleted Successfully']);
    }
}
