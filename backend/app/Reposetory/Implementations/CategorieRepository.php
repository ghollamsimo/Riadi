<?php
namespace App\Reposetory\Implementations;

use App\Models\Categorie;
use App\Reposetory\Interfaces\CategorieInterface;

class CategorieRepository  implements CategorieInterface {
    public function store(\Illuminate\Http\Request $request)
    {
        $validate = $request->validate([
            'name' => 'required'
        ]);
        Categorie::create([
            'name' => $validate['name']
        ]);
        return response()->json(['message' => 'Categorie Created SuccessFully']);
    }
}
