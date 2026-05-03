import React from "react";
import { Head } from "@inertiajs/react";

export default function AuthLayout({ children, title }) {
    return (
        <>
            <Head title={title || "Masuk - S.I.W.A.R.G.A"} />
            <div className="min-h-screen flex w-full bg-white">
                {/* Left Side: Branding & Visual */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-teal-900 items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-slate-900/90"></div>

                    <div className="relative z-10 p-12 text-white max-w-lg">
                        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-teal-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold mb-4 tracking-tight">
                            S.I.W.A.R.G.A
                        </h1>
                        <p className="text-teal-100 text-lg leading-relaxed">
                            Sistem Informasi Warga Terpadu.
                            <br />
                            Manajemen RT/RW skala enterprise untuk lingkungan
                            yang lebih tertib, transparan, dan modern.
                        </p>

                        <div className="mt-12 flex items-center gap-4 text-sm text-teal-200/80">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full border-2 border-teal-900 bg-teal-800 flex items-center justify-center text-xs"
                                    >
                                        U{i}
                                    </div>
                                ))}
                            </div>
                            <p>Bergabunglah dengan ratusan warga lainnya.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50">
                    <div className="w-full max-w-md space-y-8">
                        <div className="lg:hidden text-center mb-8">
                            <h1 className="text-2xl font-bold text-teal-900">
                                S.I.W.A.R.G.A
                            </h1>
                            <p className="text-slate-500 text-sm mt-2">
                                Manajemen Warga Terpadu
                            </p>
                        </div>
                        {children}
                        <div className="mt-8 text-center text-xs text-slate-400">
                            &copy; {new Date().getFullYear()} S.I.W.A.R.G.A
                            System. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
