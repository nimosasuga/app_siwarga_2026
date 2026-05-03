<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Menangani permintaan masuk dan memeriksa peran (role) pengguna.
     *
     * @param Request $request
     * @param Closure $next
     * @param string ...$roles
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        // Menggunakan Facade Auth yang dikenali sempurna oleh Intelephense
        if (!Auth::check()) {
            return redirect('/login');
        }

        $userRole = Auth::user()->role;

        if (!in_array($userRole, $roles)) {
            abort(403, 'Akses Ditolak: Anda tidak memiliki otoritas untuk melihat halaman ini.');
        }

        return $next($request);
    }
}
