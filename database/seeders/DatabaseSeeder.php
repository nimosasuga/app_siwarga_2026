<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Tenant; // Pastikan kita memanggil Model Tenant
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Buat Tenant Pusat (Pondasi Pertama)
        $tenantUtama = Tenant::create([
            'kode_kawasan' => 'PST-01',
            'kode_rt' => '001',
            'kode_rw' => '001'
        ]);

        // 2. Buat Akun Super Admin
        User::create([
            'tenant_id' => $tenantUtama->id,
            'username' => 'admin_siwarga',
            'nama' => 'Bapak Super Admin',
            'password' => Hash::make('admin123'),
            'blok_rumah' => 'Pusat/1',
            'jabatan' => 'Developer',
            'role' => 'super_admin',
            'status' => 'AKTIF'
        ]);

        // 3. Generate 10 Warga Acak Menggunakan Factory
        User::factory(10)->create([
            'tenant_id' => $tenantUtama->id,
        ]);
    }
}
