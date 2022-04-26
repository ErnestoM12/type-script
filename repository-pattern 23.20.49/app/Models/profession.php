<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class profession extends Model
{
    use HasFactory;

    protected $fillable = [
        'profesion'
    ];



    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
