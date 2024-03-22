<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Client;
use App\Models\DrRiad;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request) {
        //$imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
        //Storage::disk('public')->put($imageName, file_get_contents($request->image));
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' =>  'required',
            //'image' => '',
            'role' => 'required',
        ]);
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            //'image' => $imageName,
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
        if(auth()->attempt(['email' => $validate['email'] , 'password' => $validate['password']])){
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
    public function updateprofile(Request $request, $id) {
        $validate = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = User::findOrFail($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->name = $validate['name'];
        $user->email = $validate['email'];
        $user->password = Hash::make($validate['password']);
        $user->save();

        return response()->json(['message' => 'Profile Updated Successfully'], 200);
    }



}
