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
            'api_endpoint' => 'required|url',
        ]);

        Tribunal::create([
            'nome' => $request->nome,
            'sigla' => $request->sigla,
            'api_endpoint' => $request->api_endpoint,
        ]);

        return redirect()->route('tribunais')->with('success', 'Tribunal adicionado com sucesso.');
    }

    public function destroy($id)
    {
        $tribunal = Tribunal::findOrFail($id);
        $tribunal->delete();

        return redirect()->route('tribunais')->with('success', 'Tribunal excluído com sucesso.');
    }

    public function update(Request $request, $id)
    {
        $tribunal = Tribunal::findOrFail($id);

        $request->validate([
            'nome' => 'required|string|max:255',
            'sigla' => 'required|string|max:10|unique:tribunais,sigla,' . $tribunal->id,
            'api_endpoint' => 'required|url',
        ]);

        $tribunal->update([
            'nome' => $request->nome,
            'sigla' => $request->sigla,
            'api_endpoint' => $request->api_endpoint,
        ]);

        return redirect()->route('tribunais')->with('success', 'Tribunal atualizado com sucesso.');
    }
}
