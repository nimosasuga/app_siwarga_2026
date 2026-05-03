import React from "react";
import { Head, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        username: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <div className="particles min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-50 via-slate-50 to-blue-50 px-4 py-12 relative overflow-hidden">
            <Head title="Masuk - SIWARGA" />

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-float"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-float-2"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo & Branding */}
                <div className="text-center mb-8 animate-float-up">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-elevated animate-glow-pulse">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-8 h-8"
                        >
                            <path d="M3 21h18"></path>
                            <path d="M5 21V7l8-4v18"></path>
                            <path d="M19 21V11l-6-3"></path>
                            <path d="M9 9v.01"></path>
                            <path d="M9 13v.01"></path>
                            <path d="M9 17v.01"></path>
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
                        SIWARGA
                    </h1>
                    <p className="text-sm text-slate-600 font-medium">
                        Sistem Manajemen Terpadu Ekosistem Warga
                    </p>
                </div>

                {/* Form Card - Glassmorphism */}
                <div
                    className="card-smooth rounded-2xl p-8 animate-slide-in-left"
                    style={{ animationDelay: "0.1s" }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username Field */}
                        <div
                            className="animate-slide-in-left"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <label
                                htmlFor="username"
                                className="block text-sm font-semibold text-slate-700 mb-2.5"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={data.username}
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                                placeholder="Masukkan username Anda"
                                className="input-smooth w-full px-4 py-3 bg-slate-50 text-slate-900 placeholder-slate-400 rounded-lg font-medium"
                                autoComplete="username"
                                autoFocus
                                disabled={processing}
                            />
                            {errors.username && (
                                <p className="text-red-600 text-xs font-semibold mt-2 animate-float-up">
                                    {errors.username}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div
                            className="animate-slide-in-left"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-slate-700 mb-2.5"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Masukkan password Anda"
                                className="input-smooth w-full px-4 py-3 bg-slate-50 text-slate-900 placeholder-slate-400 rounded-lg font-medium"
                                autoComplete="current-password"
                                disabled={processing}
                            />
                            {errors.password && (
                                <p className="text-red-600 text-xs font-semibold mt-2 animate-float-up">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn-smooth w-full inline-flex items-center justify-center px-4 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-elevated hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed mt-2 text-base"
                        >
                            {processing ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Memverifikasi...
                                </>
                            ) : (
                                <>
                                    <span>Masuk ke Sistem</span>
                                    <svg
                                        className="w-5 h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Info */}
                <div
                    className="mt-8 text-center animate-float-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    <p className="text-xs text-slate-500 font-medium">
                        Hubungi administrator jika Anda lupa username atau
                        password
                    </p>
                </div>
            </div>
        </div>
    );
}
