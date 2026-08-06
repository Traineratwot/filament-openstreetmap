# AGENTS.md

## Package Overview

This is `traineratwot/filament-openstreetmap` — a Laravel package that adds an OpenStreetMap field to Filament v3+ forms. Uses Leaflet.js for the map UI.

## Architecture

- `src/Forms/Components/MapInput.php` — Main Filament form field (entry point)
- `src/Data/Point.php` — Value object with format conversion (lat/lng, WKT, GeoJSON, DMS, URLs)
- `src/Casts/PointCast.php` — Eloquent cast for storing Points in DB
- `src/Enums/PointFormat.php` — 11 coordinate format options
- `resources/views/forms/components/map.blade.php` — Leaflet map Blade template (Alpine.js + Livewire)
- `resources/leaflet/` — Vendored Leaflet JS/CSS (publishes to `public/vendor/filament-openstreetmap/leaflet/`)

## Dependencies

- PHP >=8
- `filament/filament` >=3
- `spatie/laravel-package-tools` ^1.9
- `matanayadev/laravel-eloquent-spatial` (optional, for spatial casts)

## Key Commands

```bash
# Install dependencies
composer install

# Test in the laravel-test app
cd laravel-test && composer install && npm install && npm run build
php artisan serve
```

## Coordinate Format Gotcha

`Point` class stores coordinates as `(latitude, longitude)` internally, but **GeoJSON and WKT use `(longitude, latitude)` order**. The `Point::fromValue()` method auto-detects format from string patterns — don't assume lat/lng order without checking the format.

## Blade Template

The map component uses `wire:ignore` with Alpine.js `x-data`. State is entangled via `$wire.entangle()`. Leaflet assets are loaded via `@push('styles')` and `@push('scripts')` — only once per page.

## Translations

Supports `en` and `ru` via `resources/lang/{en,ru}/input.php`. Translation key: `filament-openstreetmap::input.placeholder`.

## Testing

No PHPUnit/phpstan in root. The `laravel-test/` directory contains a full Laravel 12 + Filament 5 app for manual testing. Run `composer test` inside `laravel-test/` to execute artisan tests.

## Publishing Assets

Service provider publishes Leaflet assets with tag `filament-openstreetmap-assets`:
```bash
php artisan vendor:publish --tag=filament-openstreetmap-assets
```
