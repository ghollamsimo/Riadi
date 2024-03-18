<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Client;
use App\Models\DrRiad;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' =>  'required',
            'role' => 'required',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'role' => $validatedData['role'],
        ]);

//        $token = $this->createToken($user);

        if ($validatedData['role'] == 'Client') {
            Client::create(['user_id' => $user->id]);
            return response()->json(['Success' => 'Client Created SuccessFully .'] , 200);
        } elseif ($validatedData['role'] == 'DrRaid') {
            DrRiad::create(['user_id' => $user->id]);
            return response()->json(['Success' => 'DrRaid Created SuccessFully .'], 200);
        } elseif ($validatedData['role'] == 'Admin') {
            $admin = Admin::create(['user_id' => $user->id]);
            return response()->json($admin, 200);
        }

        return response()->json(['message' => 'User Created SuccessFully .'] , 200);
    }
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'You are deconected SuccessFully.']);
    }


    public function login(Request $request){
        $validate = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if(auth()->attempt(['email'=>$validate['email'],'password' => $validate['password']])){
            $userid = Auth::user();
        }

        return response()->json(['userid' => $userid] , 200);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(['massage' => 'Account Deleted With Success']);
    }
}
