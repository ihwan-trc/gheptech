<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TopBar;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        TopBar::create([
            "name" => 'Jl.Arumba No.31 Malang',
            "icon" => '<i class="fa fa-map-marker-alt me-2 text-danger"></i>',
            "link" => '/'
        ]);
    }
}
