<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tribunal;
use Inertia\Inertia;

class TribunalController extends Controller
{
    public function index()
    {
        $tribunais = Tribunal::paginate(12);
        return Inertia::render('tribunais', [
            'tribunais' => $tribunais,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'sigla' => 'required|string|max:10|unique:tribunais,sigla',
            'api_endpoint' => 'nullable|url',
        ]);

        Tribunal::create([
            'nome' => $request->nome,
            'sigla' => $request->sigla,
            'api_endpoint' => $request->api_endpoint,
        ]);

        return redirect()->route('tribunais')->with('success', 'Tribunal adicionado com sucesso.');
    }
}
