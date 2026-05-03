<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="S.I.W.A.R.G.A - Sistem Manajemen Terpadu Ekosistem Warga">
    <meta name="theme-color" content="#0f172a">
    <title inertia>SIWARGA - Sistem Manajemen Warga</title>

    <!-- Preload Fonts untuk Better Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Memuat aset React dan Tailwind menggunakan Vite -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body
    class="font-sans antialiased bg-linear-to-br from-slate-50 via-slate-50 to-blue-50 text-slate-900 selection:bg-blue-600 selection:text-white">
    <!-- Root Element untuk React/Inertia -->
    <div id="app" data-page="{{ json_encode($page) }}">
        @inertia
    </div>

    <!-- Fallback untuk JavaScript yang dinonaktifkan -->
    <noscript>
        <div class="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div class="text-center px-6">
                <h1 class="text-2xl font-bold text-slate-900 mb-4">JavaScript Diperlukan</h1>
                <p class="text-slate-600">Aplikasi S.I.W.A.R.G.A memerlukan JavaScript untuk berfungsi. Silakan aktifkan
                    JavaScript di browser Anda.</p>
            </div>
        </div>
    </noscript>
</body>

</html>
