<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Repa extends Model
{
    use HasFactory;

    protected $fillable = ['name' , 'riad_id'];

    public function riad(){
        return $this->hasMany(Riad::class);
    }
}
