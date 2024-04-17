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
        'cover',
        'drriad_id',
        'categorie_id',
        'status',
        'image',
        'acreage',
        'checkout',
        'guests',
        'rooms',
        'rule',
        'checkin',
        'maxnight',
        'minnight',
        'etat'
    ];
    protected $table = 'riads';
    public function drriad()
    {
        return $this->belongsTo(DrRiad::class);
    }
    public function images()
    {
        return $this->hasMany(Image::class,'riad_id');
    }
    public function repas()
    {
        return $this->belongsToMany(Repa::class, 'riad__repas');
    }

    public function reservation()
    {
        return $this->hasMany(Reservation::class);
    }
    public function categorie(){
        return $this->belongsTo(Categorie::class);
    }
    public function services(){
        return $this->belongsToMany(Services::class, 'riad__services')->withPivot('name');
    }

    public function serviceid(){
        return $this->hasMany(Riad_Service::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    public function favori()
    {
        return $this->belongsTo(Favori::class);
    }

}
