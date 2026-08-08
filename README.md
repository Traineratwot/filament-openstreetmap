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

Then publish the Leaflet assets:

```bash
php artisan vendor:publish --tag=filament-openstreetmap-assets
```

This copies Leaflet JS/CSS to `public/vendor/filament-openstreetmap/leaflet/`.


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

## Using Point (recommended)

The `Point` value object is the recommended way to work with coordinates. It handles format conversion, parsing, and distance calculations.

```php
use Traineratwot\FilamentOpenStreetMap\Data\Point;

// Create a point
$point = new Point(55.7558, 37.6173);

// Format to different output formats
$point->format(PointFormat::LAT_LNG);      // "55.7558,37.6173"
$point->format(PointFormat::WKT);          // "POINT(37.6173 55.7558)"
$point->format(PointFormat::GEOJSON);      // {"type":"Point","coordinates":[37.6173,55.7558]}
$point->format(PointFormat::URL_GOOGLE);   // https://www.google.com/maps/search/?api=1&query=...
$point->format(PointFormat::DMS);          // 55°45'20.88"N 37°37'2.28"E

// Parse from any supported format (auto-detection)
$point = Point::fromValue('55.7558,37.6173');
$point = Point::fromValue('POINT(37.6173 55.7558)');
$point = Point::fromValue('{"type":"Point","coordinates":[37.6173,55.7558]}');
$point = Point::fromValue('https://www.openstreetmap.org/?mlat=55.7558&mlon=37.6173');
$point = Point::fromValue(['latitude' => 55.7558, 'longitude' => 37.6173]);
$point = Point::fromValue([37.6173, 55.7558]); // [lng, lat] array

// Distance to another point (meters)
$moscow = new Point(55.7558, 37.6173);
$berlin = new Point(52.5200, 13.4050);
$moscow->distanceTo($berlin); // ~1609960 meters

// Check equality
$point1->equals($point2); // true if within 0.000001 precision
```

### Using Point in MapInput

```php
use Traineratwot\FilamentOpenStreetMap\Data\Point;

MapInput::make('location')
    ->saveFormat(PointFormat::WKT)
```

## Markers

You can add predefined markers to the map. Clicking a marker applies its coordinates to the field value.

```php
use Traineratwot\FilamentOpenStreetMap\Data\Point;

MapInput::make('point')
    ->markers([
        ['title' => 'Office', 'point' => new Point(55.75, 37.61), 'color' => '#ff0000'],
        ['title' => 'Home',   'point' => new Point(55.76, 37.62)],
    ])
```

Each marker accepts:
- `title` — popup text (optional)
- `point` — `Point` instance or `[lat, lng]` array
- `color` — marker dot color (default `#3388ff`)

### Dynamic markers (Closure)

```php
MapInput::make('point')
    ->markers(fn () => auth()->user()->locations->map(fn ($loc) => [
        'title' => $loc->name,
        'point' => [$loc->lat, $loc->lng],
        'color' => $loc->is_active ? '#22c55e' : '#ef4444',
    ])->toArray())
```

## Markers Only mode

Restrict selection to predefined markers only — map clicks are disabled, search filters the marker list.

```php
MapInput::make('point')
    ->markers([
        ['title' => 'Moscow',  'point' => new Point(55.7558, 37.6173)],
        ['title' => 'Berlin',  'point' => new Point(52.5200, 13.4050)],
        ['title' => 'Paris',   'point' => new Point(48.8566,  2.3522)],
    ])
    ->markersOnly()
```

### Dynamic markersOnly (Closure)

```php
MapInput::make('point')
    ->markers(fn () => $this->getAvailablePoints())
    ->markersOnly(fn () => $record?->restrict_selection ?? false)
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
    js: Leaflet.js (vendored)
