<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Riad extends Model
{
    use HasFactory;

    protected $fillable = [
        'name' ,
        'localisation',
        'description',
        'prix',
        'date',
        'drriad_id'
    ];

    public function drriad()
    {
        return $this->belongsTo(DrRiad::class);
    }

    public function rules(){
        return $this->hasMany(Ruls::class);
    }
}
