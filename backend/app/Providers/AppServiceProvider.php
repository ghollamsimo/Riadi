<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Reposetory\Interfaces\CategorieInterface;
use App\Reposetory\Implementations\CategorieRepository;
use App\Services\Implementations\CategorieService;
use App\Services\Interfaces\CategorieServiceInterface;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        app()->bind(CategorieInterface::class , CategorieRepository::class);
        app()->bind(CategorieServiceInterface::class , CategorieService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
