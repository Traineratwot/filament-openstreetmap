<?php

namespace Traineratwot\FilamentOpenStreetMap\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasIcon;
use Filament\Support\Contracts\HasLabel;
use JsonException;
use Traineratwot\FilamentOpenStreetMap\Data\Point;

enum PointFormat: string implements HasLabel, HasIcon, HasColor
{
    case LAT_LNG = 'lat_lng';
    case LNG_LAT = 'lng_lat';
    case WKT = 'wkt';
    case GEOJSON = 'geojson';
    case DMS = 'dms';
    case DECIMAL = 'decimal';
    case URL_GOOGLE = 'url_google';
    case URL_OSM = 'url_osm';
    case URL_YANDEX = 'url_yandex';
    case ARRAY = 'array';
    case LIST = 'list';

    /**
     * Получить человекочитаемое название
     */
    public function getLabel(): ?string
    {
        return match ($this) {
            self::LAT_LNG => 'Latitude, Longitude',
            self::LNG_LAT => 'Longitude, Latitude',
            self::WKT => 'Well-Known Text (WKT)',
            self::GEOJSON => 'GeoJSON',
            self::DMS => 'Degrees Minutes Seconds (DMS)',
            self::DECIMAL => 'Decimal Degrees',
            self::URL_GOOGLE => 'Google Maps URL',
            self::URL_OSM => 'OpenStreetMap URL',
            self::URL_YANDEX => 'Yandex Maps URL',
            self::ARRAY => 'Associative Array',
            self::LIST => 'Indexed Array',
        };
    }

    /**
     * Получить иконку для Filament
     */
    public function getIcon(): ?string
    {
        return match ($this) {
            self::LAT_LNG, self::LNG_LAT, self::DECIMAL => 'heroicon-o-map-pin',
            self::WKT, self::GEOJSON => 'heroicon-o-code-bracket',
            self::DMS => 'heroicon-o-calculator',
            self::URL_GOOGLE, self::URL_OSM, self::URL_YANDEX => 'heroicon-o-link',
            self::ARRAY, self::LIST => 'heroicon-o-queue-list',
        };
    }

    /**
     * Получить цвет для Filament
     */
    public function getColor(): string|array|null
    {
        return match ($this) {
            self::LAT_LNG, self::LNG_LAT => 'primary',
            self::WKT, self::GEOJSON => 'info',
            self::DMS, self::DECIMAL => 'success',
            self::URL_GOOGLE, self::URL_OSM, self::URL_YANDEX => 'warning',
            self::ARRAY, self::LIST => 'gray',
        };
    }

    /**
     * Получить описание формата
     */
    public function getDescription(): string
    {
        return match ($this) {
            self::LAT_LNG => 'Example: 55.7558,37.6173',
            self::LNG_LAT => 'Example: 37.6173,55.7558',
            self::WKT => 'Example: POINT(37.6173 55.7558)',
            self::GEOJSON => 'Example: {"type":"Point","coordinates":[37.6173,55.7558]}',
            self::DMS => 'Example: 55°45\'20.88"N 37°37\'2.28"E',
            self::DECIMAL => 'Example: 55.755800, 37.617300',
            self::URL_GOOGLE => 'Opens in Google Maps',
            self::URL_OSM => 'Opens in OpenStreetMap',
            self::URL_YANDEX => 'Opens in Yandex Maps',
            self::ARRAY => 'Associative array with lat/lng keys',
            self::LIST => 'Indexed array [lng, lat]',
        };
    }

    /**
     * Получить пример использования
     * @throws JsonException
     */
    public function getExample(): string
    {
        $point = new Point(55.7558, 37.6173);
        return $point->format($this);
    }

    /**
     * Проверить, является ли формат URL
     */
    public function isUrl(): bool
    {
        return in_array($this, [
            self::URL_GOOGLE,
            self::URL_OSM,
            self::URL_YANDEX,
        ]);
    }

    /**
     * Получить все URL форматы
     */
    public static function urlFormats(): array
    {
        return [
            self::URL_GOOGLE,
            self::URL_OSM,
            self::URL_YANDEX,
        ];
    }

    /**
     * Получить все текстовые форматы
     */
    public static function textFormats(): array
    {
        return [
            self::LAT_LNG,
            self::LNG_LAT,
            self::WKT,
            self::GEOJSON,
            self::DMS,
            self::DECIMAL,
        ];
    }

    /**
     * Получить все форматы массивов
     */
    public static function arrayFormats(): array
    {
        return [
            self::ARRAY,
            self::LIST,
        ];
    }
}