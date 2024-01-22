# This is filament-openstreetmap

[![Latest Version on Packagist](https://img.shields.io/packagist/v/traineratwot/filament-openstreetmap.svg?style=flat-square)](https://packagist.org/packages/traineratwot/filament-openstreetmap)

[![Total Downloads](https://img.shields.io/packagist/dt/traineratwot/filament-openstreetmap.svg?style=flat-square)](https://packagist.org/packages/traineratwot/filament-openstreetmap)



**Add openstreetmap field to filament form**

**Full free map API**

## Interface
![2024-01-19_09-54-03](https://github.com/Traineratwot/filament-openstreetmap/assets/41589091/fc0d847e-9d5a-4506-b445-d183b91f9198)
## How it view in database
![NVIDIA_Share_Yn8wCeCsJf](https://github.com/Traineratwot/filament-openstreetmap/assets/41589091/94c4a3f6-b75d-4fbc-87a1-cd02ffcde34a)

## Installation

You can install the package via composer:

```bash
composer require traineratwot/filament-openstreetmap
```


## Usage

Make model with migration

1)
```php

return new class extends Migration {
    public function up(): void
    {
        Schema::create('map_points', function (Blueprint $table) {
            $table->id();
            $table->point('point')->nullable(); // for Point type
            $table->string('point_string')->nullable(); // for String type
            $table->json('point_array')->nullable(); // for Array type
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('map_points');
    }
};
```
2) 

```php
namespace App\Models;

use MatanYadaev\EloquentSpatial\Objects\Point;
use Illuminate\Database\Eloquent\Model;

class MapPoint extends Model
{

    protected $casts = [
        'point' => Point::class, // Important for Point type
        'point_array' => 'array', // Important for Array type
    ];
    
    ...
}
```
Make filametn resource

```php

<?php

namespace App\Filament\Resources;

use Traineratwot\FilamentOpenStreetMap\Forms\Components\MapInput;


class MapPointResource extends Resource
{
    protected static ?string $model = MapPoint::class;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                MapInput::make('point')
                    ->saveAsPoint() // Important for Point type
                    ->placeholder('Choose your location')
                    ->coordinates(37.619, 55.7527) // start coordinates
                    ->rows(10) // height of map
                ,

                MapInput::make('point_string')
                    ->saveAsString() // default 
                    ->placeholder('Choose your location')
                    ->coordinates(37.619, 55.7527) // start coordinates
                    ->rows(10) // height of map
                ,

                MapInput::make('point_array')
                    ->saveAsArray() // Important for Array type
                    ->placeholder('Choose your location')
                    ->coordinates(37.619, 55.7527) // start coordinates
                    ->rows(10) // height of map
                ,

              ]);
    }
...
}


```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Traineratwot](https://github.com/Traineratwot)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Used packages
    composer: matanyadaev/laravel-eloquent-spatial
    npm: ol
    npm: ol-geocoder
