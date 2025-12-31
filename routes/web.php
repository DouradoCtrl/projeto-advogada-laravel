<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\CnjApiController;
use App\Http\Controllers\TribunalController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('clientes', function () {
        return Inertia::render('clientes');
    })->name('clientes');

    Route::get('processos', function () {
        return Inertia::render('processos');
    })->name('processos');

    Route::get('tribunais', [TribunalController::class, 'index'])->name('tribunais');

    Route::post('tribunais', [TribunalController::class, 'store'])->name('tribunais.store');

    Route::delete('tribunais/{id}', [TribunalController::class, 'destroy'])->name('tribunais.destroy');

    Route::put('tribunais/{id}', [TribunalController::class, 'update'])->name('tribunais.update');
    
    Route::get('cnj-token', [CnjApiController::class, 'index'])->name('cnjToken');

    Route::delete('/cnj-token/{id}', [CnjApiController::class, 'destroy'])->name('cnj-token.destroy');

    Route::post('/cnj-token', [CnjApiController::class, 'store'])->name('cnj-token.store');

    Route::put('/cnj-token', [CnjApiController::class, 'update'])->name('cnj-token.update');
});

require __DIR__.'/settings.php';
