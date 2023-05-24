<?php

use App\Http\Controllers\TopBarController;
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

Route::get("/top-bars", [TopBarController::class, "index"]);
Route::post("/top-bars", [TopBarController::class, "store"]);
Route::put("/top-bars/{id}", [TopBarController::class, "update"]);
Route::get("/top-bars/{id}", [TopBarController::class, "show"]);
Route::delete("/top-bars/{id}", [TopBarController::class, "destroy"]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
