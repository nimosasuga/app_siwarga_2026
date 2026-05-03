<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>SIWARGA</title>

    <!-- Memuat aset React dan Tailwind menggunakan Vite -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-slate-50 text-slate-900">
    <!-- Di sinilah komponen React (Welcome.jsx, Login.jsx, dll) akan dirender -->
    @inertia
</body>

</html>
