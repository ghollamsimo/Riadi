<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $client = Client::where('user_id', Auth::id())->first();

        $notifications = Notification::with(['client', 'riad.drriad.user', 'reservation'])
            ->whereHas('riad', function ($query) {
               $query->where('status', "Approved");
            })
            ->where('client_id', $client->id)
            ->latest('created_at')
            ->get();

        return response()->json($notifications, 200);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Notification $notification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notification $notification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Notification $notification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $client = Client::where('user_id', Auth::id())->first();
        $notification = Notification::findOrFail($id);
        if ($notification->client_id === $client->id) {
            $notification->delete();
            return response()->json(['message' => 'Notification deleted successfully'], 200);
        }
            return response()->json(['error' => 'Unauthorized'], 401);
    }
}
