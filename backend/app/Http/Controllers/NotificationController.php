<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notifications = Notification::with(['client', 'riad.drriad.user'])
            ->join('riads', 'notifications.riad_id', '=', 'riads.id')
            ->where('riads.status', '=', 'Approved')
            ->latest('notifications.created_at')
            ->take(5)
            ->get();
        return response()->json($notifications , 200);
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
        $notification = Notification::findOrFail($id);
        if ($notification->client_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $notification->delete();
        return response()->json(['message' => 'Notification deleted successfully'], 200);
    }
}
