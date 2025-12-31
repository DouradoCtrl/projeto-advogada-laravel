<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tribunal;
use Inertia\Inertia;

class TribunalController extends Controller
{
    public function index()
    {
        $tribunais = Tribunal::all();
        return Inertia::render('tribunais', [
            'tribunais' => $tribunais,
        ]);
    }
}
