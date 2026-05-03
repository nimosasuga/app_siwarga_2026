<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenant_id')->constrained('tenants')->cascadeOnDelete();
            $table->string('id_transaksi')->unique();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->decimal('nominal', 12, 2);
            $table->string('bulan_dibayar', 50);
            $table->foreignId('petugas_id')->nullable()->constrained('users')->nullOnDelete();
            $table->enum('status', ['MENUNGGU VALIDASI', 'LUNAS'])->default('MENUNGGU VALIDASI');
            $table->string('bukti_url')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
