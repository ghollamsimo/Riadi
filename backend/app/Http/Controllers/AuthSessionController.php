<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthSessionController extends Controller
{
    public function validate()
    {
        $userRole = Auth::user()->role;

        if ($userRole === 'Admin'){
            return response()->json();
        }elseif ($userRole === 'Client'){
            return response()->json();
        }elseif ($userRole === 'DrRiad'){
            return response()->json();
        }else{
            return response()->json();
        }
    }
}
