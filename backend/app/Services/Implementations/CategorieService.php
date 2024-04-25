<?php
namespace App\Services\Implementations;

use App\Services\Interfaces\CategorieServiceInterface;
use App\Reposetory\Interfaces\CategorieInterface;


class CategorieService implements CategorieServiceInterface
{
    public function __construct(protected CategorieInterface $reposetory)
    {

    }
    public function store(\Illuminate\Http\Request $request)
    {
        return $this->reposetory->store($request);
    }
}
