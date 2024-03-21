<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Categorie;
use App\Models\Client;
use App\Models\DrRiad;
use App\Models\Repa;
use App\Models\Riad;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function stats(){
        $clientcount = Client::count();
        $drriadcount = DrRiad::count();
        $riadcount = Riad::count();
        $categoriecount = Categorie::count();
        $repacount = Repa::count();
        $userscount = User::count();

        return response()->json([
            'clientcount' => $clientcount,
            'drriadcount' => $drriadcount,
            'riadcount' => $riadcount,
            'categoriecount' => $categoriecount,
            'repacount' => $repacount,
            'userscount' => $userscount
        ] , 200);
    }

    public function index()
    {
        $users = User::where('role' , 'DrRaid')->orWhere('role', 'Client')->get();
        $riads = Riad::all();

        return response()->json([
            'users' => $users,
            'riads' => $riads
        ] , 200);
    }

   public function approved(Request $request , $riadid){
        $riad = Riad::findOrFail($riadid);
        $riad->update([
            'status' => $request->status
        ]);
        if ($request->status === 'Approved'){
            return response()->json(['message' => 'Riad Approved SuccessFully']);
        }elseif ($request->status === 'Rejected'){
            return response()->json(['message' => 'Riad Rejected SuccessFully']);
        }else{
            return response()->json(['message' => 'This Status In Not Available!']);
        }
   }


    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin)
    {
        //
    }
}
