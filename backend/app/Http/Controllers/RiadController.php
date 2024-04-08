<?php

namespace App\Http\Controllers;

use App\Http\Requests\RiadRequest;
use App\Models\Comments;
use App\Models\DrRiad;
use App\Models\Image;
use App\Models\Repa;
use App\Models\Riad;
use App\Models\Riad_Repa;
use App\Models\Riad_Service;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RiadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $riads = Riad::with('images')->get();

        return response()->json($riads);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RiadRequest $request)
    {
        $user_id = Auth::id();
        $drriad = DrRiad::where('user_id', $user_id)->first();

        if ($drriad) {
            $validatedData = $request->validated();
            $serviceIds = $request->input('service_id');
            $repa_ids = $request->input('repa_id');
            $images = $request->file('image');
            unset($validatedData['image']);

            $riads = Riad::create([...$validatedData, 'drriad_id' => $drriad->id]);
            if (!is_array($serviceIds)) {
                $serviceIds = [$serviceIds];
            }
            if (!is_array($repa_ids)) {
                $repa_ids = [$repa_ids];
            }
            foreach ($repa_ids as $repa_id) {
                $repa = Repa::find($repa_id);
                if ($repa) {
                    Riad_Repa::create([
                        'riad_id' => $riads->id,
                        'repa_id' => $repa_id
                    ]);
                } else {
                    return response()->json(['error' => 'Error Creating Repas'], 400);
                }
            }
            foreach ($serviceIds as $serviceId) {
                $service = Services::find($serviceId);
                if ($service) {
                    Riad_Service::create([
                        'riad_id' => $riads->id,
                        'service_id' => $serviceId
                    ]);
                } else {
                    return response()->json(['message' => 'Error Creating Services']);
                }
            }
            if ($images) {
                foreach ($images as $file) {
                    $filename = time() . '_' . $file->getClientOriginalName();
                    $file->storeAs('public/images', $filename);

                    Image::create([
                        'image' => $filename,
                        'riad_id' => $riads->id
                    ]);
                }
            }

            return response()->json(['message' => 'Riad created successfully'], 201);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $riad = Riad::with('drriad' , 'categorie' )->findOrFail($id);
        $comments = Comments::with('riad' , 'client')->where('riad_id' , $riad->id)->get();
        return response()->json(['riad' => $riad , 'comment' => $comments] , 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Riad $riad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RiadRequest $request, $id)
    {
        $user_id = Auth::id();
        $drriad = DrRiad::where('user_id', $user_id)->first();
        $riads = Riad::findOrFail($id);

        if ($drriad) {
            $validatedData = $request->validated();

            $images = $request->file('image');
            unset($validatedData['image']);

            $riads->update($validatedData);

            if ($images) {
                foreach ($images as $file) {
                    $filename = time() . '_' . $file->getClientOriginalName();
                    $file->storeAs('public/images', $filename);

                    Image::updateOrCreate(
                        ['riad_id' => $riads->id],
                        ['image' => $filename]
                    );
                }
            }

            return response()->json(['message' => 'Riad Updated Successfully'], 200);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user_id = Auth::id();
        $drriad = DrRiad::where('user_id', $user_id)->first();
        $riad = Riad::findOrFail($id);

        if ($drriad){
            $riad->delete();
            return response()->json(['message' => 'Riad Deleted SuccessFully'] , 200);
        }
        return response()->json(['message' => 'Unauthorized'] , 401);
    }
}
