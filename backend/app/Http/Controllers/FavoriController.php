<?php

namespace App\Http\Controllers;

use App\Http\Requests\FavoriRequest;
use App\Models\Favori;
use App\Models\Riad;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();
        $client = Client::where('user_id' , $user_id )->first();
        if (!$client){
            return response()->json(['message' => 'Unothorized']);
        }else{
        $favori = Favori::where('client_id' , '=' , $client->id)->with('riad')->get();
        }

        return response()->json($favori);
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
    public function destroy($id)
    {
        $client = Client::where('user_id', Auth::id())->first();
        $favori = Favori::findOrFail($id);
        if ($favori->client_id == $client->id) {
            $favori->delete();
            return response()->json(['message' => 'WishList Deleted Successfully']);
        } else {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
    }
}
