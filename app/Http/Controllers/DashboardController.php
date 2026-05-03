<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Menampilkan halaman Dashboard utama.
     * Wajib menyertakan data auth.user agar frontend tidak error.
     */
    public function index(Request $request)
    {
        return Inertia::render('Dashboard', [
            'auth' => [
                'user' => [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'role' => $request->user()->role,
                ]
            ],
            // Data statistik bisa ditambahkan di sini nanti dari Service
            'stats' => [
                'total_warga' => 0,
                'total_kk' => 0,
                'iuran_bulan_ini' => 0,
                'surat_diproses' => 0,
            ]
        ]);
    }
}
