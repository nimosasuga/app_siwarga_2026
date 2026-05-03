import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-slate-50 to-blue-50 page-transition">
            <Head title="Dashboard - SIWARGA" />

            {/* Navbar */}
            <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-slate-200/50 shadow-soft px-6 py-4">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-3 animate-slide-in-left">
                        <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-elevated">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M3 21h18"></path>
                                <path d="M5 21V7l8-4v18"></path>
                                <path d="M19 21V11l-6-3"></path>
                                <path d="M9 9v.01"></path>
                                <path d="M9 13v.01"></path>
                                <path d="M9 17v.01"></path>
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            SIWARGA
                        </h1>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 animate-slide-in-right">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-slate-900">
                                {auth.user.nama}
                            </p>
                            <p className="text-xs text-slate-500">
                                {auth.user.role}
                            </p>
                        </div>
                        <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-elevated">
                            <span className="text-sm font-bold text-white">
                                {auth.user.nama.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-all duration-300 text-sm hover-lift"
                        >
                            Keluar
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Header Section */}
                <div className="mb-12 animate-float-up">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
                        Selamat datang kembali,{" "}
                        <span className="gradient-text">
                            {auth.user.nama.split(" ")[0]}
                        </span>
                    </h2>
                    <p className="text-base text-slate-600 font-medium">
                        Berikut adalah ringkasan aktivitas sistem Anda hari ini.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {/* Total Warga */}
                    <div
                        className="card-smooth rounded-xl p-6 hover-lift animate-slide-in-left"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-sm text-slate-600 mb-2 font-medium">
                                    Total Warga Aktif
                                </p>
                                <p className="text-3xl font-bold text-slate-900">
                                    --
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shadow-soft">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500">
                            Data dari database
                        </p>
                    </div>

                    {/* Total Transaksi */}
                    <div
                        className="card-smooth rounded-xl p-6 hover-lift animate-slide-in-left"
                        style={{ animationDelay: "0.15s" }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-sm text-slate-600 mb-2 font-medium">
                                    Transaksi Bulan Ini
                                </p>
                                <p className="text-3xl font-bold text-slate-900">
                                    --
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-linear-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center shadow-soft">
                                <svg
                                    className="w-6 h-6 text-emerald-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <rect
                                        x="2"
                                        y="7"
                                        width="20"
                                        height="14"
                                        rx="2"
                                    ></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500">
                            Menunggu validasi
                        </p>
                    </div>

                    {/* Kas Masuk */}
                    <div
                        className="card-smooth rounded-xl p-6 hover-lift animate-slide-in-left"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-sm text-slate-600 mb-2 font-medium">
                                    Kas Masuk
                                </p>
                                <p className="text-3xl font-bold text-slate-900">
                                    Rp --
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-linear-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center shadow-soft">
                                <svg
                                    className="w-6 h-6 text-green-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500">Bulan ini</p>
                    </div>

                    {/* Status Sistem */}
                    <div
                        className="card-smooth rounded-xl p-6 hover-lift animate-slide-in-left"
                        style={{ animationDelay: "0.25s" }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-sm text-slate-600 mb-2 font-medium">
                                    Status Sistem
                                </p>
                                <p className="text-3xl font-bold text-slate-900">
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-linear-to-r from-emerald-100 to-emerald-200 text-emerald-800 shadow-soft">
                                        ✓ Online
                                    </span>
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-linear-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center shadow-soft">
                                <svg
                                    className="w-6 h-6 text-amber-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <polyline points="12 7 12 12 16 14"></polyline>
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500">Stabil</p>
                    </div>
                </div>

                {/* Quick Actions Section */}
                <div
                    className="card-smooth rounded-xl p-8 animate-slide-in-left"
                    style={{ animationDelay: "0.3s" }}
                >
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                            Akses Cepat
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 font-medium">
                            Menu shortcut untuk fitur penting
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            href="#"
                            className="group p-5 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover-lift"
                        >
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                    <svg
                                        className="w-5 h-5 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4.354a4 4 0 110 5.292M15 4H9m6 16H9m6-7a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">
                                        Kelola Warga
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Tambah, edit, hapus data warga
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="#"
                            className="group p-5 border border-slate-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 hover-lift"
                        >
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                                    <svg
                                        className="w-5 h-5 text-emerald-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">
                                        Catat Transaksi
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Pencatatan iuran bulanan warga
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="#"
                            className="group p-5 border border-slate-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 hover-lift"
                        >
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                                    <svg
                                        className="w-5 h-5 text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">
                                        Laporan
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Lihat laporan keuangan & warga
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
