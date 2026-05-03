import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <div className="particles min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-50 via-slate-50 to-blue-50 px-4 relative overflow-hidden">
            <Head title="Selamat Datang - SIWARGA" />

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-float"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-float-2"></div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <div className="text-center mb-10 animate-float-up">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-blue-500 to-blue-600 rounded-3xl mb-6 shadow-deep animate-glow-pulse">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-12 h-12"
                        >
                            <path d="M3 21h18"></path>
                            <path d="M5 21V7l8-4v18"></path>
                            <path d="M19 21V11l-6-3"></path>
                            <path d="M9 9v.01"></path>
                            <path d="M9 13v.01"></path>
                            <path d="M9 17v.01"></path>
                        </svg>
                    </div>

                    {/* Title & Subtitle */}
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">
                        SIWARGA
                    </h1>
                    <p className="text-base text-slate-600 font-medium leading-relaxed">
                        Sistem Manajemen Terpadu
                        <br />
                        Ekosistem Warga
                    </p>
                </div>

                {/* Info Box - Glassmorphism */}
                <div className="card-smooth rounded-2xl p-6 mb-8 animate-slide-in-left">
                    <div className="space-y-4">
                        <div
                            className="flex gap-4 animate-slide-in-left"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="shrink-0 w-6 h-6 text-blue-600 mt-0.5 font-bold">
                                ✓
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">
                                    Manajemen Data Warga
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    Kelola informasi penghuni dengan mudah dan
                                    terstruktur
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-slate-100"></div>
                        <div
                            className="flex gap-4 animate-slide-in-left"
                            style={{ animationDelay: "0.15s" }}
                        >
                            <div className="shrink-0 w-6 h-6 text-blue-600 mt-0.5 font-bold">
                                ✓
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">
                                    Pencatatan Transaksi
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    Catat iuran dan pengeluaran RT/RW dengan
                                    transparan
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-slate-100"></div>
                        <div
                            className="flex gap-4 animate-slide-in-left"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <div className="shrink-0 w-6 h-6 text-blue-600 mt-0.5 font-bold">
                                ✓
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">
                                    Laporan & Analisis
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    Dapatkan insight finansial yang akurat dan
                                    real-time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    href="/login"
                    className="btn-smooth inline-flex items-center justify-center w-full px-6 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-base hover:shadow-deep hover:from-blue-700 hover:to-blue-800 transition-all duration-300 animate-slide-in-left group"
                    style={{ animationDelay: "0.25s" }}
                >
                    <span>Masuk ke Portal</span>
                    <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </Link>

                {/* Footer */}
                <div
                    className="mt-10 text-center animate-float-up"
                    style={{ animationDelay: "0.3s" }}
                >
                    <p className="text-xs text-slate-500 font-medium">
                        Platform modern untuk pengelolaan RT/RW yang lebih baik
                    </p>
                </div>
            </div>
        </div>
    );
}
