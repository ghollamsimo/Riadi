<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Client;
use App\Models\DrRiad;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Exists;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function store(Request $request){
        $validate = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required',
        ]);

        $user = User::create([
            'name' => $validate['name'],
            'email' => $validate['email'],
            'password' => bcrypt($validate['password']),
            'role' => $validate['role'],
        ]);

        if ($validate['role'] == 'Client') {
            Client::create(['user_id' => $user->id]);
            return response()->json(['Success' => 'Client Created SuccessFully .']);
        } elseif ($validate['role'] == 'DrRaid') {
            DrRiad::create(['user_id' => $user->id]);
            return response()->json(['Success' => 'DrRaid Created SuccessFully .'], 200);
        }

        return response()->json(['message' => 'User Created SuccessFully .'] , 200);
    }
    public function show($id)
    {
        $user = User::findOrFail($id);
        $role = $user->role;

        return response()->json([$user, $role] , 200);
    }
    public function update(Request $request , User $id)
    {
        $validate = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required'
        ]);

        $id->update([
            'name' => $validate['name'],
            'email' => $validate['email'],
            'password' => $validate['password'],
            'role' => $validate['role']
        ]);

        if ($validate['role'] == 'Client') {
            Client::create(['user_id' => $id->id]);
            return response()->json(['Success' => 'Client Updated SuccessFully .']);
        } elseif ($validate['role'] == 'DrRaid') {
            DrRiad::create(['user_id' => $id->id]);
            return response()->json(['Success' => 'DrRaid Updated SuccessFully .'], 200);
        }elseif ($validate['role'] == 'Admin'){
            return response()->json(['message' => 'You Cant Create A Admin']);
        }else {
            return response()->json(['message' => 'User Updated SuccessFully']);
        }
    }
    public function destroy(User $user)
    {
        if ($user->role == 'Client'){
            Client::where('user_id', $user->id)->delete();
            return response()->json(['message' => 'Client Deleted SuccessFully']);
        }elseif ($user->role == 'DrRaid'){
            DrRiad::where('user_id' , $user->id)->delete();
            return response()->json(['message' => 'DrRiad Deleted SuccessFully']);
        }

        $user->delete();

        return response()->json(['message' => 'User Deleted Successfully']);
    }
}
