<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favori extends Model
{
    use HasFactory;

    protected $fillable = ['client_id' , 'riad_id' , 'status'];

    public function client(){
        return $this->hasMany(Client::class);
    }

    public function riad(){
        return $this->belongsToMany(Riad::class);
    }
}
