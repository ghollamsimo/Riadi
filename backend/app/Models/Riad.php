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
        'drriad_id',
        'categorie_id',
        'status',
        'image'
    ];

    public function drriad()
    {
        return $this->belongsTo(DrRiad::class);
    }

    public function rules(){
        return $this->hasMany(Ruls::class);
    }
    public function repa(){
        return $this->hasMany(Repa::class);
    }
    public function categorie(){
        return $this->belongsTo(Categorie::class);
    }
}
