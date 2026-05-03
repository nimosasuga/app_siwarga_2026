<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rute Halaman Utama (Landing Page)
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

// Rute untuk Tamu (Belum Login)
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store']);
});

// Rute Terlindungi (Wajib Login)
Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

    // Contoh Rute Dashboard Umum (Bisa diakses semua role yang sudah login)
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Contoh penerapan RoleMiddleware: Hanya Super Admin dan Ketua RT yang boleh akses
    // Catatan: RoleMiddleware dipanggil menggunakan alias class-nya langsung
    Route::middleware([\App\Http\Middleware\RoleMiddleware::class . ':super_admin,ketua_rt'])->group(function () {
        Route::get('/manajemen-warga', function () {
            return "Halaman khusus Admin & RT";
        });
    });
});
