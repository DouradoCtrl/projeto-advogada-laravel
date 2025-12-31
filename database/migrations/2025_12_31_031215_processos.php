<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('processos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cliente_id');
            $table->unsignedBigInteger('tribunal_id');
            $table->string('numero_processo')->unique();
            $table->string('descricao')->nullable();
            $table->timestamps();

            $table->foreign('cliente_id')->references('id')->on('clientes')->onDelete('cascade');
            $table->foreign('tribunal_id')->references('id')->on('tribunais')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('processos');
    }
};
