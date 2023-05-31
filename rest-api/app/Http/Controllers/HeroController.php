<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Hero;

class HeroController extends Controller
{
    public function index() {
        $heros = Hero::all();

        return response()->json([
            "message" => "Successfully fetched heros.",
            "data" =>$heros
        ], Response::HTTP_OK);
    }
}
