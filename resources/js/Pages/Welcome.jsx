import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900 p-6">
            <Head title="Selamat Datang - SIWARGA" />

            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
                {/* Ikon Vektor Gedung Corporate */}
                <div className="flex justify-center mb-6">
                    <svg
                        viewBox="0 0 24 24"
                        width="64"
                        height="64"
                        fill="none"
                        stroke="#0f172a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 21h18"></path>
                        <path d="M5 21V7l8-4v18"></path>
                        <path d="M19 21V11l-6-3"></path>
                        <path d="M9 9v.01"></path>
                        <path d="M9 13v.01"></path>
                        <path d="M9 17v.01"></path>
                    </svg>
                </div>

                {/* Tipografi Judul */}
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
                    SIWARGA
                </h1>
                <p className="text-slate-500 font-medium mb-8">
                    Sistem Manajemen Terpadu Ekosistem Warga
                </p>

                {/* Tombol Navigasi ke Halaman Login menggunakan Inertia Link */}
                <Link
                    href="/login"
                    className="inline-block w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                    Masuk ke Portal
                </Link>
            </div>
        </div>
    );
}
