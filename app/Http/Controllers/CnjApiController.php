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

    public function destroy($id)
    {
        $token = CnjApiToken::findOrFail($id);
        $token->delete();

        return redirect()->route('cnjToken')->with('success', 'Token excluído com sucesso.');
    }

    public function getToken(Request $request)
    {
        // Lógica para obter o token do CNJ
    }

    public function store(Request $request)
    {
        CnjApiToken::truncate();

        $request->validate([
            'token' => 'required|string|max:255',
        ]);

        CnjApiToken::create([
            'token' => $request->input('token'),
        ]);

        return redirect()->route('cnjToken')->with('success', 'Token adicionado com sucesso.');
    }
}
