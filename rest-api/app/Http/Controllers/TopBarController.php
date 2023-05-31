<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\TopBar;
use Illuminate\Support\Facades\Validator;

class TopBarController extends Controller
{
    public function index() {
        $topbars = TopBar::all();

        return response()->json([
            "message" => "Successfully fetched top bars.",
            "data" => $topbars
        ], Response::HTTP_OK);
    }
    
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            "alamat" => "required|string",
            "no_telp" => "required|string",
            "email" => "required|string",
            "github" => "required|string",
            "facebook" => "required|string",
            "instagram" => "required|string",
            "youtube" => "required|string"
        ]);

        if($validator->fails()) {
            return response()->json([
                "message" => "Failed creating a new topbar.",
                "error" => $validator->errors()
            ],Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validate();

        try {
            $createdTopBar = TopBar::create($validated);
        } catch (\Exception $e) {
            return response()->json([
                "massage" => "Failed creating a new topbar.",
                "error" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response()->json([
            "massage" => "Successfully creating a new topbar.",
            "data" => $createdTopBar
        ], Response::HTTP_CREATED);
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            "alamat" => "string",
            "no_telp" => "string",
            "email" => "string",
            "github" => "string",
            "facebook" => "string",
            "instagram" => "string",
            "youtube" => "string",
        ]);

        if($validator->fails()) {
            return response()->json([
                "message" => "Failed creating a new topbar.",
                "error" => $validator->errors()
            ],Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validate();

        try {
            $topbar = TopBar::findOrFail($id);
            $topbar->update($validated);
        } catch (\Exception $e) {
            return response()->json([
                "massage" => "Failed updating a topbar.",
                "error" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response()->json([
            "message" => "Successfully updated a topbar.",
            "data" => $topbar
        ]);
    }

    public function show($id) {
        $topbar = TopBar::findOrFail($id);

        return response()->json([
            "message" => "Successfully fetched a topbar.",
            "data" => $topbar
        ]);
    }

    public function destroy($id) {
        $topbar = TopBar::findOrFail($id);
        $topbar->delete();

        return response()->json([
            "message" => "Successfully deleted a topbar with id {$id}."
        ]);
    }
}
