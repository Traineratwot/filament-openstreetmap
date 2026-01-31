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
        Schema::create('points', function (Blueprint $table) {
            $table->id();
            $table->string('point')->nullable();
            $table->json('point_array')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('points');
    }
};
```
2) 

```php
namespace App\Models;

use MatanYadaev\EloquentSpatial\Objects\Point;
use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'];

    protected function casts()
    {
        return [
            'point' => PointCast::class,
            'point_array' => PointCast::class . ':' . PointFormat::ARRAY->value ,
        ];
    }
}

```
Make filament resource

```php

<?php

namespace App\Filament\Resources;

use Traineratwot\FilamentOpenStreetMap\Forms\Components\MapInput;


class MapPointResource extends Resource
{
    protected static ?string $model = MapPoint::class;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                MapInput::make('point')
                    ->columnSpan(2)
                    ->saveFormat(PointFormat::WKT)
                ,
                MapInput::make('point_array')
                    ->saveFormat(PointFormat::ARRAY)
                ,

                TextEntry::make('created_at')
                    ->label('Created Date')
                    ->dateTime(),

                TextEntry::make('updated_at')
                    ->label('Last Modified Date')
                    ->dateTime(),
            ]);
    }
}
```

# formats

You can save in database in thar formats
```php
foreach (PointFormat::cases() as $p){
   dump($p->getExample());
}

#   $point = new Point(55.7558, 37.6173);
#    return $point->format(PointFormat::URL_YANDEX);

```

```
"55.7558,37.6173" // app/Console/Commands/DevTestCommand.php:17
"37.6173,55.7558" // app/Console/Commands/DevTestCommand.php:17
"POINT(37.6173 55.7558)" // app/Console/Commands/DevTestCommand.php:17
"{"type":"Point","coordinates":[37.6173,55.7558]}" // app/Console/Commands/DevTestCommand.php:17
"55°45'20.88"N 37°37'2.28"E" // app/Console/Commands/DevTestCommand.php:17
"55.755800, 37.617300" // app/Console/Commands/DevTestCommand.php:17
"https://www.google.com/maps/search/?api=1&query=55.7558,37.6173" // app/Console/Commands/DevTestCommand.php:17
"https://www.openstreetmap.org/?mlat=55.7558&mlon=37.6173#map=15/55.7558/37.6173" // app/Console/Commands/DevTestCommand.php:17
"https://yandex.ru/maps/?pt=37.6173,55.7558&z=15&l=map" // app/Console/Commands/DevTestCommand.php:17
"{"latitude":55.7558,"longitude":37.6173}" // app/Console/Commands/DevTestCommand.php:17
"[37.6173,55.7558]" // app/Console/Commands/DevTestCommand.php:17
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
