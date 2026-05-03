import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Login() {
    // 1. Inisialisasi useForm dari Inertia untuk menangani state dan error otomatis
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    // 2. Fungsi untuk menangani pengiriman formulir
    const submit = (e) => {
        e.preventDefault();
        // Mengirim data menggunakan metode POST ke rute '/login'
        post('/login');
    };

    return (
        <div className="login-wrapper">
            <Head title="Log in - SIWARGA" />

            {/* Efek Visual Partikel Background */}
            <div className="corp-blob blob-primary"></div>
            <div className="corp-blob blob-secondary"></div>

            <div className="login-panel">
                {/* Bagian Logo dan Judul */}
                <div className="login-logo-container">
                    <svg viewBox="0 0 24 24" width="54" height="54" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18"></path>
                        <path d="M5 21V7l8-4v18"></path>
                        <path d="M19 21V11l-6-3"></path>
                        <path d="M9 9v.01"></path>
                        <path d="M9 13v.01"></path>
                        <path d="M9 17v.01"></path>
                    </svg>
                </div>
                <div className="login-logo-text">SIWARGA APP</div>
                <div className="login-tagline">Sistem Manajemen Terpadu Ekosistem Warga</div>

                {/* Formulir Login */}
                <form onSubmit={submit}>
                    <div className="input-group">
                        <label htmlFor="username" className="login-label">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className="login-input"
                            placeholder="Masukkan username"
                            autoComplete="username"
                            autoFocus
                        />
                        {/* Menampilkan pesan error khusus untuk username jika ada */}
                        {errors.username && <div className="error-msg">{errors.username}</div>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="login-label">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="login-input"
                            placeholder="Masukkan password"
                            autoComplete="current-password"
                        />
                        {/* Menampilkan pesan error khusus untuk password jika ada */}
                        {errors.password && <div className="error-msg">{errors.password}</div>}
                    </div>

                    <button type="submit" disabled={processing} className="login-btn">
                        {processing ? 'Memverifikasi...' : 'Masuk ke Sistem'}
                    </button>
                </form>
            </div>
        </div>
    );
}
