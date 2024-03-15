<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ruls extends Model
{
    use HasFactory;
    protected $fillable = ['rule' , 'riad_id' , 'drriad_id' , 'status'];

    public function riad()
    {
        return $this->hasMany(Riad::class);
    }

    public function drriad(){
        return $this->belongsTo(DrRiad::class);
    }
}
