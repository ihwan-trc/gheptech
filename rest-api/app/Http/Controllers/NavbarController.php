<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use App\Models\Navbar;

use Illuminate\Http\Request;

class NavbarController extends Controller
{
    public function index() {
        $navbars = Navbar::all();

        return response()->json([
            "message" => "Successfully fetched navbars.",
            "data" =>$navbars
        ], Response::HTTP_OK);
    }
}
