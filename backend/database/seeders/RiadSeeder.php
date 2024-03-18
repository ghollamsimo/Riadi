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
                'drriad_id' => null,
                'image' => 'hhhhhhh',
            ],
            [
                'name' => 'Riad Bab Dokala',
                'localisation' => 'Marrakech',
                'description' => 'Makayn maydar',
                'prix' => 69,
                'date' => now(),
                'drriad_id' => null,
                'image' => 'test',
            ],
            [
                'name' => 'Riad cha9a',
                'localisation' => 'Lmhamid',
                'description' => 'waaaa3',
                'prix' => 99,
                'date' => now(),
                'drriad_id' => null,
                'image' => 'hhh',
            ]
        ];

        Riad::insert($riads);
    }
}
