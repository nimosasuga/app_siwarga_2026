<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    /**
     * Properti $guarded yang dibiarkan kosong (array kosong) berarti kita
     * mengizinkan pengisian data secara massal (Mass Assignment) untuk semua kolom.
     * Ini diperlukan agar fungsi Tenant::create() di Seeder Anda bisa berjalan.
     */
    protected $guarded = [];
}
