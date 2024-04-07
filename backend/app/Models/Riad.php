<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Riad extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'localisation',
        'description',
        'prix',
        'date',
        'drriad_id',
        'categorie_id',
        'status',
        'image',
        'acreage',
        'checkout',
        'guests',
        'rooms',
        'rule'
    ];

    public function drriad()
    {
        return $this->belongsTo(DrRiad::class);
    }
    public function images()
    {
        return $this->belongsTo(Image::class);
    }
    public function repa(){
        return $this->hasMany(Repa::class);
    }
    public function categorie(){
        return $this->belongsTo(Categorie::class);
    }
    public function service(){
        return $this->hasMany(Services::class);
    }
}
