<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            [
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'email_verified_at' => null,
                'password' => bcrypt('1234'),
                'role' => 'Admin',
                'remember_token' => null,
              //  'image' => "ttttt",
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

        User::insert($user);
    }
}
