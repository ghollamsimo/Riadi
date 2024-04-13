<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $fillable = ['client_id' , 'message' , 'riad_id'];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function riad()
    {
        return $this->belongsTo(Riad::class);
    }
}
