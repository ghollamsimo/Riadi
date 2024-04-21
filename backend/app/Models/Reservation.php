<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = ['client_id' , 'status' , 'riad_id' , 'guests' , 'night'];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function riad(){
        return $this->belongsTo(Riad::class);
    }

    public function notification()
    {
        return $this->belongsTo(Notification::class);
    }
}
