<?php

use App\Http\Controllers\Api\ShopController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ShopController::class)->group(function (){
    Route::get('/shops', 'index');
    Route::post('/shop', 'store');
    Route::get('/shop/{id}', 'show');
    Route::put('/shop/{id}', 'update');
    Route::delete('/shop/{id}', 'destroy');

});