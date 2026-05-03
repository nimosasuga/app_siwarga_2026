<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();
            $table->string('kode_kawasan', 50);
            $table->string('kode_rt', 10);
            $table->string('kode_rw', 10);
            $table->timestamps();

            $table->unique(['kode_kawasan', 'kode_rt', 'kode_rw']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
