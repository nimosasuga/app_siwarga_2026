<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenant_id')->constrained('tenants')->cascadeOnDelete();
            $table->string('username')->unique();
            $table->string('password');
            $table->string('nama');
            $table->string('nik', 20)->nullable();
            $table->string('blok_rumah', 50);
            $table->string('no_hp', 20)->nullable();
            $table->string('jabatan', 50);
            $table->enum('role', ['super_admin', 'ketua_rt', 'sekretaris', 'bendahara', 'korlap_gang', 'warga'])->default('warga');
            $table->enum('status', ['AKTIF', 'NON-AKTIF'])->default('AKTIF');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
