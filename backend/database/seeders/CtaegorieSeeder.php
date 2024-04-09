<?php

namespace Database\Seeders;

use App\Models\Categorie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CtaegorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Raid à dos de chameau',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Raid pédestre',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Raid en quad',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Raid en VTT',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Raid en 4x4',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Raid équestre ',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Raid en ULM (Ultra Léger Motorisé)',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Raid du Rallye Aïcha des Gazelles',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        Categorie::insert($categories);
    }
}
