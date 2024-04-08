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
                'drriad_id' => null,
                'acreage' => 3,
                'checkout' => now(),
                'guests' => 4,
                'rule' => 'matjibch lklab',
                'currency' => 'USD',
                'rooms' => 4,
            ],
            [
                'name' => 'Riad Bab Dokala',
                'localisation' => 'Marrakech',
                'description' => 'Makayn maydar',
                'prix' => 69,
                'drriad_id' => null,
                'acreage' => 3,
                'checkout' => now(),
                'guests' => 4,
                'rule' => 'matjibch lklab',
                'currency' => 'USD',
                'rooms' => 4,
            ],
            [
                'name' => 'Riad cha9a',
                'localisation' => 'Lmhamid',
                'description' => 'waaaa3',
                'prix' => 99,
                'drriad_id' => null,
                'acreage' => 3,
                'checkout' => now(),
                'guests' => 4,
                'rule' => 'matjibch lklab',
                'currency' => 'USD',
                'rooms' => 4,
            ]
        ];

        Riad::insert($riads);
    }
}
