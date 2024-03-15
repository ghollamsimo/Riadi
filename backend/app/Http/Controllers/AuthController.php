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
    public function register(Request $request){

        $validatedate = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' =>  'required|string|confirmed',
            'role' => 'required',
        ]);

        $image = explode('/', $validatedate['image']->store('public/usersImages'));
        $user = User::create([
            'name' => $validatedate['name'],
            'email' => $validatedate['email'],
            'password' => bcrypt($validatedate['password']),
            'role' => $validatedate['role']
        ]);

        if ($validatedate['role' == 'Client']){
            return $client = Client::create(['user_id' => $user->id]);
        }elseif ($validatedate['role' == 'DrRaid']){
            return $drriad = DrRiad::create(['user_id' => $user->id]);
        }elseif ($validatedate['role' == 'Admin']){
            return $admin = Admin::create(['user_id' => $user->id]);
        }

        return response()->json($user);
    }

    public function logout(){
         auth()->logout();
        return response()->json();
    }

    public function login(Request $request){
        $validate = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if(auth()->attempt(['email'=>$validate['email'],'password' => $validate['password']])){
            $userid = Auth::id();
        }

        return response()->json(['userid' => $userid]);
    }

}
