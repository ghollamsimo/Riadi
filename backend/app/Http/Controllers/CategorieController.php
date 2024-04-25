<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;
use App\Services\Interfaces\CategorieServiceInterface;


class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(protected CategorieServiceInterface $service)
    {

    }
    public function index()
    {
        $categories = Categorie::all();

        return response()->json($categories);
    }
    public function store(Request $request)
    {
        return $this->service->store($request);
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
