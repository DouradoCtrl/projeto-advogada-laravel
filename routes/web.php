<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

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

    Route::get('tribunais', function () {
        return Inertia::render('tribunais');
    })->name('tribunais');
});

require __DIR__.'/settings.php';
