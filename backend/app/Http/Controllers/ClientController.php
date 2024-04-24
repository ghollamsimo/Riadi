<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Comments;
use App\Models\Favori;
use App\Models\Notification;
use App\Models\Reservation;
use App\Models\Riad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{

    public function index()
    {
        $raids = Riad::with('categorie')->where('status' , '=' , 'Approved')->paginate(5);
        return response()->json($raids ,200);
    }
    public function count(){
        $client = Client::where('user_id', Auth::id())->first();
        if ($client){
        $notifcount = Notification::where('client_id' , '=', $client->id)->count();
        $favori = Favori::where('client_id' , '=', $client->id)->count();
        }else{
            return response()->json(['message' => 'Unothorized']);
        }

         return response()->json(['wishlist' => $favori , 'notification' => $notifcount] , 200);
    }
    public function BookedReservation($reservations ){
        $reservation = Reservation::findOrFail($reservations);
        $clientId = $reservation->client_id;
        $notification = Notification::where('reservation_id' , '=' , $reservation->id);
        Client::findOrFail($clientId);
        $reservation->update([
            'status' => 'Booked',
        ]);
        if ($reservation->status === 'Booked'){
            $notification->delete();
        }else{
            return response()->json(['message' => 'Status In Not Booked To delete Notification'] , 200);
        }
        return response()->json(['message' => 'Reservation Booked Successfully']);
    }

}
