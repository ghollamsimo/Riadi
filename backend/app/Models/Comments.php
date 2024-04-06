<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    use HasFactory;
    protected $fillable = ['client_id' , 'riad_id' , 'comments'];

    public function client()
    {
        return $this->belongsTo(User::class);
    }
    public function riad(){
        return $this->belongsTo(Riad::class);
    }
}
