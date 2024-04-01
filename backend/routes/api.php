<?php

use App\Http\Middleware\CheckRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\CategorieController;
use \App\Http\Controllers\UserController;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return Auth::user()->id;
});
//-------Route Of Developper-------
Route::post('/register' , [\App\Http\Controllers\AuthController::class , 'register']);
Route::post('/logout' , [\App\Http\Controllers\AuthController::class , 'logout']);
Route::post('/login' , [\App\Http\Controllers\AuthController::class , 'login']);
Route::delete('/remove/{id}' , [\App\Http\Controllers\AuthController::class , 'destroy']);
Route::post('/profile/{id}' , [\App\Http\Controllers\AuthController::class , 'updateprofile']);
//-------End Route Of Developper--------

//--------Admin--------
Route::get('/categories' , [CategorieController::class , 'index']);
Route::post('/categorie' , [CategorieController::class , 'store']);
Route::post('/updatecategorie/{id}' , [CategorieController::class , 'update']);
Route::delete('/deletecategorie/{id}' , [CategorieController::class , 'destroy']);

Route::get('/users' , [UserController::class , 'index']);
Route::post('/createuser' , [UserController::class , 'store']);
Route::post('/edituser/{id}' , [UserController::class , 'update']);
Route::delete('/deleteuser/{user}' , [UserController::class , 'destroy']);

Route::get('/stats' , [\App\Http\Controllers\AdminController::class , 'stats']);
Route::get('/dashboard' , [\App\Http\Controllers\AdminController::class , 'index']);
Route::post('/approvedriad/{riadid}' , [\App\Http\Controllers\AdminController::class , 'approved']);
Route::get('/user/{id}' , [UserController::class , 'show']);

Route::get('/repas' , [\App\Http\Controllers\RepaController::class , 'index']);
Route::post('/createrepa' , [\App\Http\Controllers\RepaController::class , 'store']);
Route::get('/repa/{id}' , [\App\Http\Controllers\RepaController::class , 'show']);
Route::post('/updaterepa/{id}' , [\App\Http\Controllers\RepaController::class , 'update']);
Route::delete('/deleterepa/{id}' , [\App\Http\Controllers\RepaController::class , 'destroy']);
//---------End Admin---------

Route::get('/riad/{id}' , [\App\Http\Controllers\RiadController::class , 'show']);
Route::get('/riads' , [\App\Http\Controllers\RiadController::class , 'index']);


Route::middleware(['auth:api', CheckRole::class . ':Client'])->group(function () {

});
