<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categorie::all();

        return response()->json($categories);
    }


    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required'
        ]);

        Categorie::create([
            'name' => $validate['name']
        ]);

        return response()->json(['message' => 'Categorie Created SuccessFully']);
    }


    public function update(Request $request, Categorie $id)
    {
        $validate = $request->validate([
            'name' => 'required'
        ]);

        $id->update([
            'name' => $validate['name'],
        ]);

        return response()->json(['message' => 'Categorie Updated SuccessFully'] , 200);
    }


    public function destroy($id)
    {
        $categorie = Categorie::findOrFail($id);
        $categorie->delete();

        return response()->json(['message' => 'Categorie Deleted SuccessFully']);
    }

}
