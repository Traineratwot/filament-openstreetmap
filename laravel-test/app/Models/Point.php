<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Traineratwot\FilamentOpenStreetMap\Casts\PointCast;
use Traineratwot\FilamentOpenStreetMap\Enums\PointFormat;

class Point extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'];

    protected function casts()
    {
        return [
            'point_array' => PointCast::class . ':' . PointFormat::ARRAY->value ,
        ];
    }
}
