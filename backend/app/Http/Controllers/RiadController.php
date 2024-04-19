<?php

namespace App\Http\Controllers;

use App\Http\Requests\RiadRequest;
use App\Models\Client;
use App\Models\Comments;
use App\Models\DrRiad;
use App\Models\Image;
use App\Models\Notification;
use App\Models\Repa;
use App\Models\Riad;
use App\Models\Riad_Repa;
use App\Models\Riad_Service;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RiadController extends Controller
{

    public function index()
    {

        $drriad = DrRiad::where('user_id', Auth::id())->first();
        if ($drriad){
            $riads = Riad::with('images' , 'categorie' , 'drriad.user')->where('drriad_id' , '=', $drriad->id)->paginate(4);
        }else{
            return response()->json(['message' => 'Unothorized']);
        }
        return response()->json($riads);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $riads = Riad::where(function($queryBuilder) use ($query) {
            $queryBuilder->where('name', 'like', "%$query%")
                ->orWhere('localisation', 'like', "%$query%");
        })
            ->where('status', '=', 'Approved')
            ->get();

        return response()->json($riads);
    }

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

            if ($request->hasFile('cover')) {
                $cover = $request->file('cover');
                $coverName = time().'.'.$cover->extension();
                $cover->storeAs('/public/images', $coverName);
            }

            $riads = Riad::create([...$validatedData, 'drriad_id' => $drriad->id , 'cover' => $coverName ]);
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

                $clients = Client::all();
                foreach ($clients as $client) {
                    Notification::create([
                        'client_id' => $client->id,
                        'riad_id' => $riads->id,
                        'message' => 'New Riad Has Been Published ' . $riads->name,
                    ]);
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

    public function show($id)
    {
        $riad = Riad::with('drriad.user' , 'categorie' , 'images' , 'serviceid'  )->findOrFail($id);
        $comments = Comments::with('riad' , 'client.user')->where('riad_id' , $riad->id)->get();
        return response()->json(['riad' => $riad , 'comment' => $comments] , 200);
    }

    public function update(RiadRequest $request, $id)
    {
        $user_id = Auth::id();
        $drriad = DrRiad::where('user_id', $user_id)->first();

        if ($drriad) {
            $validatedData = $request->validated();
            $serviceIds = $request->input('service_id');
            $repa_ids = $request->input('repa_id');
            $images = $request->file('image');
            unset($validatedData['image']);

            $riad = Riad::findOrFail($id);

            if ($request->hasFile('cover')) {
                $cover = $request->file('cover');
                $coverName = time().'.'.$cover->getClientOriginalExtension();
                $cover->storeAs('public/images', $coverName);
                $validatedData['cover'] = $coverName;
            }
        //    dd($coverName);
            $riad->update([...$validatedData , $validatedData['cover'] ]);

            if (!is_array($repa_ids)) {
                $repa_ids = [$repa_ids];
            }

            $riad->repas()->sync($repa_ids);

            if (!is_array($serviceIds)) {
                $serviceIds = [$serviceIds];
            }

            foreach ($serviceIds as $serviceId) {
                $service = Services::find($serviceId);
                if ($service) {
                    Riad_Service::UpdateOrCreate([
                        'riad_id' => $riad->id,
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

                    Image::UpdateOrCreate([
                        'image' => $filename,
                        'riad_id' => $riad->id
                    ]);
                }
            }

            return response()->json(['message' => 'Riad updated successfully'], 200);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }


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
