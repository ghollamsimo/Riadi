<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\CategorieController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register' , [\App\Http\Controllers\AuthController::class , 'register']);
Route::post('/logout' , [\App\Http\Controllers\AuthController::class , 'logout']);
Route::post('/login' , [\App\Http\Controllers\AuthController::class , 'login']);
Route::delete('/remove/{id}' , [\App\Http\Controllers\AuthController::class , 'destroy']);

//--------Admin--------
Route::post('/categorie' , [CategorieController::class , 'store']);
Route::post('/updatecategorie/{id}' , [CategorieController::class , 'update']);
Route::delete('/deletecategorie/{id}' , [CategorieController::class , 'destroy']);


Route::get('/riads' , [\App\Http\Controllers\RiadController::class , 'index']);
