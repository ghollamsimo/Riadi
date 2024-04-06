<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Comments;
use App\Models\DrRiad;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();
        $drriad = DrRiad::where('user_id', $user_id)->first();

        if ($drriad){
            $service = Services::all();
            return response()->json($service , 200);
        }else{
            return response()->json(['message' => 'Unothorized']);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'name'=> 'required'
        ]);

        $user_id = Auth::id();
        $drriad = DrRiad::where('user_id', $user_id)->first();

        if ($drriad) {
            $validation = $request->validate([
                'name' => 'required',
            ]);
           Services::create([
                'drriad_id' => $drriad->id,
                'name' => $validate['name'],
            ]);
            return response()->json(['message' => 'Service Created Successfully']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Services $services)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Services $services)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $validate = $request->validate([
            'name' => 'required'
        ]);

        $service = Services::findOrFail($id);
        $user_id = Auth::id();
        $drriad = DrRiad::where('user_id', $user_id)->first();

        if ($drriad){
            $service->update([
                'name' => $validate['name']
            ]);

            return response()->json($service , 200);
        }else{
            return response()->json(['message' => 'Unothorized']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service = Services::findOrFail($id);
        if (!$service){
            return response()->json(['message' => 'Service Not Found'] , 404);
        }
        if (Auth::user()->id !== $service->drriad_id){
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $service->delete();

        return response()->json(['message' => 'Service Deleted SuccessFully']);
    }
}
