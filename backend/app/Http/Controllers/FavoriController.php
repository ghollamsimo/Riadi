<?php

namespace App\Http\Controllers;

use App\Http\Requests\FavoriRequest;
use App\Models\Favori;
use App\Models\Riad;
use http\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriController extends Controller
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
    public function store(FavoriRequest $request , $riad_id)
    {
        $validate = $request->validated();
        $riad = Riad::findOrFail($riad_id);

        $client = \App\Models\Client::where('user_id', Auth::id())->first();
        Favori::create([
            'client_id' => $client->id,
            'riad_id' => $riad->id,
            'status' => true
        ]);

        return response()->json(['message' => 'The Riad Has Been Fovorite']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Favori $favori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Favori $favori)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Favori $favori)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Favori $favori)
    {
        //
    }
}
