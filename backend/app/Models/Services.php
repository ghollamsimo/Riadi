<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;

    protected $fillable = ['drriad_id' , 'name'];



    public function drriad(){
        return $this->belongsTo(DrRiad::class);
    }

   public function riads()
   {
       return $this->belongsToMany(Riad::class, 'riad__services', 'service_id', 'riad_id');
   }

}
