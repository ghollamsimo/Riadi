<?php

namespace Database\Seeders;

use App\Models\Repa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RepasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $repas = [
          [
              'name' => 'Couscous',
              'created_at' => now(),
              'updated_at' => now()
          ],
            [
                'name' => 'Harira',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Pastilla',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Rfissa',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Bawlo',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Loubya',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Khobza 3ajiba',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Psg',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        Repa::insert($repas);
    }
}
