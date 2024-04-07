<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Riad_Repa extends Model
{
    use HasFactory;
    protected $fillable = ['riad_id' , 'repa_id'];
    protected $table = 'riad__repas';

    public function riad()
    {
        return $this->belongsToMany(Riad::class);
    }
    public function repa()
    {
        return $this->belongsToMany(Repa::class);
    }
}
