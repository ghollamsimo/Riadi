<?php

namespace App\Http\Controllers;

use App\Models\Repa;
use Illuminate\Http\Request;

class RepaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $repas = Repa::all();


        return response()->json($repas , 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required',
        ]);

        $repa = Repa::create([
            'name' => $validate['name'],
        ]);

        return response()->json(['massage' => 'Repa Created SuccessFully']);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $repa = Repa::findOrFail($id);
        return response()->json($repa , 200);
    }


    public function update(Request $request, Repa $id)
    {
        $validate = $request->validate([
            'name' => 'required',
        ]);

        $id->update([
            'name' => $validate['name'],
        ]);

        return response()->json(['message' => 'Repa Updated SuccessFully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $repa = Repa::findOrFail($id);
        $repa->delete();

        return response()->json(['message' => 'Repa Deleted SuccessFully']);
    }
}
