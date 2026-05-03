<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    /**
     * Menampilkan halaman formulir login React.
     */
    public function create()
    {
        return Inertia::render('Auth/Login');
    }

    /**
     * Memproses data login yang dikirim oleh pengguna.
     */
    public function store(Request $request)
    {
        // 1. Validasi input: pastikan username dan password tidak kosong
        $credentials = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required'],
        ]);

        // 2. Coba mencocokkan data dengan database
        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            // 3. Jika berhasil, perbarui sesi untuk keamanan dari serangan fiksasi sesi
            $request->session()->regenerate();

            // 4. Arahkan ke halaman utama/dashboard
            return redirect()->intended('/dashboard');
        }

        // 5. Jika gagal, kembalikan pesan error ke halaman login
        return back()->withErrors([
            'username' => 'Kredensial yang diberikan tidak cocok dengan data kami.',
        ])->onlyInput('username');
    }

    /**
     * Memproses pengguna keluar (Logout).
     */
    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
