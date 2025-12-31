<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\CnjApiToken;
use Inertia\Inertia;

class CnjApiController extends Controller
{
    public function index()
    {
        $tokens = CnjApiToken::all();
        return Inertia::render('cnjToken', [
            'tokens' => $tokens,
        ]);
    }

    public function getToken(Request $request)
    {
        // Lógica para obter o token do CNJ
    }
}
