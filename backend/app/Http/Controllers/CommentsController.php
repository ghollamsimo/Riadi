<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Comments;
use App\Models\Riad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function count($id)
    {
        $riad = Riad::findOrFail($id);
        if ($riad){
            $comment = Comments::where('riad_id' , '=' , $riad->id )->count();
            return response()->json(['comments' => $comment]);
        }else{
            return response()->json(['message' => 'No Raid Found']);
        }
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
    public function store(Request $request, $riad_id)
    {
        $user_id = Auth::id();
        $client = Client::where('user_id', $user_id)->first();

        if ($client) {
            $validation = $request->validate([
                'comments' => '',
            ]);
            $comment = Comments::create([
                'client_id' => $client->id,
                'riad_id' => $riad_id,
                'comments' => $request->comments,
            ]);
            return response()->json(['message' => 'Comments Created Successfully']);
        } else {
            return response()->json(['error' => 'Client not found'], 404);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Comments $comments)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comments $comments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $comment = Comments::findOrFail($id);
        if (!$comment){
            return response()->json(['message' => 'Comment Not Found'] , 404);
        }
        if (Auth::user()->id !== $comment->client_id){
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $validate = $request->validate([
            'comments' => 'required'
        ]);

        $comment->update([
            'comments' => $validate['comments']
        ]);

        return response()->json(['message' => 'Comment Updated SuccessFull'] ,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $client = Client::where('user_id', Auth::id())->first();
        $comment = Comments::findOrFail($id);
        if (!$comment){
            return response()->json(['message' => 'Comment Not Found'] , 404);
        }
       if ($comment->client_id == $client->id){
        $comment->delete();
           return response()->json(['message' => 'Comments Deleted SuccessFull']);
       }
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}
