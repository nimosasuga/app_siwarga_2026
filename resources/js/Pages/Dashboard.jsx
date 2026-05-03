import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Head title="Dashboard Utama - SIWARGA" />

            {/* Navbar Premium */}
            <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="text-blue-600">
                        {/* Ikon Gedung Corporate */}
                        <svg
                            viewBox="0 0 24 24"
                            width="28"
                            height="28"
                            fill="none"
                            stroke="currentColor"
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
                    <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                        SIWARGA
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    {/* Tombol Logout Inertia (Menggunakan metode POST untuk keamanan) */}
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="px-4 py-2 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-colors duration-200 text-sm"
                    >
                        Keluar Sistem
                    </Link>
                </div>
            </header>

            {/* Konten Utama Dasbor */}
            <main className="p-6 max-w-7xl mx-auto mt-4">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Ringkasan Eksekutif
                    </h2>
                    <p className="text-slate-500 font-medium">
                        Selamat datang kembali di sistem S.I.W.A.R.G.A.
                    </p>
                </div>

                {/* Grid Kartu Analitik */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex justify-center items-center mr-4">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                                Total Penghuni
                            </h3>
                            <p className="text-2xl font-extrabold text-slate-900">
                                Menghitung...
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 rounded-xl bg-green-50 text-green-600 flex justify-center items-center mr-4">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    x="2"
                                    y="6"
                                    width="20"
                                    height="12"
                                    rx="2"
                                ></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <path d="M6 12h.01M18 12h.01"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                                Total Kas
                            </h3>
                            <p className="text-2xl font-extrabold text-slate-900">
                                Rp --
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
