<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use App\Models\TopBar;
use App\Models\Navbar;
use App\Models\Hero;

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
            "alamat" => 'Jl.Arumba No.31 Malang',
            "no_telp" => '085201202582',
            "email" => 'official@gheptech.com',
            "github" => 'https://github.com/ihwan-trc',
            "facebook" => 'facebook.com',
            "instagram" => 'https://www.instagram.com/gheptech/',
            "youtube" => 'youtube.com'
        ]);

        Navbar::create([
            "menu1" => 'Beranda',
            "menu2" => 'Tentang Kami',
            "menu3" => 'Layanan',
            "menu4" => 'Portofolio',
            "menu5" => 'Blog',
            "menu6" => 'Kontak',
            "menu7" => 'Pertanyaan'
        ]);

        Hero::create([
            "title" => 'Transformasi Bisnis Anda dengan Teknologi',
            "description" => 'Hilangkan sekat teknologi, kami membantu bisnis anda bergerak lebih cepat, ke arah yang lebih tepat',
            "image" => 'carousel-1.jpg'
        ]);

        Hero::create([
            "title" => 'Tumbuh Bersama dan Selaras Dengan Teknologi',
            "description" => 'Perkembangan Teknologi tidak lagi jadi ancaman, kami akan membantu bisnis anda untuk tumbuh dan berkembang bersama teknologi',
            "image" => 'carousel-2.jpg'
        ]);
    }
}
