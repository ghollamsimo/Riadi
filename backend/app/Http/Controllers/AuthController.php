<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Client;
use App\Models\DrRiad;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'role' => 'required',
        ]);

        $user = User::create([
            ...$validatedData,
            'password' => bcrypt($validatedData['password']),
        ]);

        $userToken = auth()->attempt($validatedData);
        $token = $this->createToken($userToken);

        if ($validatedData['role'] == 'Client') {
            Client::create(['user_id' => $user->id, 'token' => $token]);
            return response()->json(['Success' => 'Client Created Successfully.'], 200);
        } elseif ($validatedData['role'] == 'DrRaid') {
            DrRiad::create(['user_id' => $user->id, 'token' => $token]);
            return response()->json(['Success' => 'DrRaid Created Successfully.', 'role' => 'DrRiad'], 200);
        }

        return response()->json(['user' => $user, 'token' => $token], 201);
    }

    public function logout(Request $request) : Response
    {
        if (auth()->check()) {
            auth()->user()->tokens()->delete();
            return response('You Logged Out!', 200);
        } else {
            return response('Not authenticated', 401);
        }
    }


    public function login(Request $request): Response{
        $validate = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);
        if(auth()->attempt(['email' => $validate['email'] , 'password' => $validate['password']])){
            $userid = Auth::user();
        }
        if(!$token = auth()->attempt($validate)) {
            return response(['error' => 'Unauthorized'], 401);
        }
        $jwt = $this->createToken($token);
        return response([$userid, $jwt], 200);
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

    protected function createToken($token)
    {
        return response([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 2880,
            'user' => auth()->user()
        ], 200);
    }

}
