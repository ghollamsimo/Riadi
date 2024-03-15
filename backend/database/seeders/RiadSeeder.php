<?php

namespace Database\Seeders;

use App\Models\Riad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RiadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $riads = [
            [
                'name' => 'Riad Lwara9',
                'localisation' => 'Marrakech',
                'description' => 'hada riad',
                'prix' => 29,
                'date' => now(),
                'drriad_id' => null
            ]
        ];

        Riad::insert($riads);
    }
}
