<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Riad_Service extends Model
{
    use HasFactory;
    protected $fillable = ['riad_id' , 'service_id'];
    protected $table = 'riad__services';
    public function riad(){
        return $this->belongsToMany(Riad::class);
    }

    public function service()
    {
        return $this->belongsToMany(Services::class);
    }
}
