<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected static ?string $password;

    public function definition(): array
    {
        return [
            // tenant_id akan diset dari Seeder utama
            'username' => fake()->unique()->userName(),
            'nama' => fake()->name(),
            'nik' => fake()->numerify('3216############'),
            'password' => static::$password ??= Hash::make('password'),
            'blok_rumah' => 'Blok ' . fake()->randomElement(['A', 'B', 'C', 'D']) . '/' . fake()->numberBetween(1, 50),
            'no_hp' => fake()->phoneNumber(),
            'jabatan' => 'Warga',
            'role' => 'warga',
            'status' => 'AKTIF',
            'remember_token' => Str::random(10),
        ];
    }
}
