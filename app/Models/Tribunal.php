<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Tribunal extends Model
{
    use HasFactory;

    protected $table = 'tribunais';
    protected $fillable = [
        'nome',
        'sigla',
        'api_endpoint',
    ];
}
