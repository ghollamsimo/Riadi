<?php

namespace App\Http\Controllers;

use App\Models\Riad;
use Illuminate\Http\Request;

class RiadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $riads = Riad::all();

        return response()->json($riads);
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
    public function show($id)
    {
        $riad = Riad::findOrFail($id);
        return response()->json($riad , 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Riad $riad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Riad $riad)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Riad $riad)
    {
        //
    }
}
