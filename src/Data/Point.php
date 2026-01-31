<?php

namespace Traineratwot\FilamentOpenStreetMap\Data;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use Spatie\LaravelData\Attributes\Validation\Between;
use Spatie\LaravelData\Attributes\Validation\Numeric;
use Spatie\LaravelData\Data;
use Stringable;
use Traineratwot\FilamentOpenStreetMap\Enums\PointFormat;

class Point extends Data implements Stringable, Arrayable, Jsonable
{
    public function __construct(
        #[Numeric]
        #[Between(-90, 90)]
        public float $latitude,

        #[Numeric]
        #[Between(-180, 180)]
        public float $longitude,
    ) {
    }

    /**
     * Единый метод форматирования
     */
    public function format(PointFormat $format = PointFormat::LAT_LNG): string
    {
        return match ($format) {
            PointFormat::LAT_LNG => $this->toLatLng(),
            PointFormat::LNG_LAT => $this->toLngLat(),
            PointFormat::WKT => $this->toWKT(),
            PointFormat::GEOJSON => $this->toGeoJson(),
            PointFormat::DMS => $this->toDMS(),
            PointFormat::URL_GOOGLE => $this->toGoogleMapsUrl(),
            PointFormat::URL_OSM => $this->toOpenStreetMapUrl(),
            PointFormat::URL_YANDEX => $this->toYandexMapsUrl(),
            PointFormat::DECIMAL => $this->toDecimal(),
            PointFormat::ARRAY => json_encode($this->toArray()),
            PointFormat::LIST => json_encode($this->toList()),
        };
    }

    /**
     * Форматы вывода
     */
    private function toLatLng(): string
    {
        return "{$this->latitude},{$this->longitude}";
    }

    private function toLngLat(): string
    {
        return "{$this->longitude},{$this->latitude}";
    }

    private function toWKT(): string
    {
        return "POINT({$this->longitude} {$this->latitude})";
    }

    private function toGeoJson(): string
    {
        return json_encode([
            'type' => 'Point',
            'coordinates' => [$this->longitude, $this->latitude]
        ], JSON_THROW_ON_ERROR);
    }

    private function toDecimal(): string
    {
        return sprintf('%.6f, %.6f', $this->latitude, $this->longitude);
    }

    private function toDMS(): string
    {
        $lat = abs($this->latitude);
        $lng = abs($this->longitude);

        $latDir = $this->latitude >= 0 ? 'N' : 'S';
        $lngDir = $this->longitude >= 0 ? 'E' : 'W';

        $latDeg = (int) floor($lat);
        $latMin = (int) floor(($lat - $latDeg) * 60);
        $latSec = round((($lat - $latDeg) * 60 - $latMin) * 60, 2);

        $lngDeg = (int) floor($lng);
        $lngMin = (int) floor(($lng - $lngDeg) * 60);
        $lngSec = round((($lng - $lngDeg) * 60 - $lngMin) * 60, 2);

        return sprintf(
            "%d°%d'%.2f\"%s %d°%d'%.2f\"%s",
            $latDeg, $latMin, $latSec, $latDir,
            $lngDeg, $lngMin, $lngSec, $lngDir
        );
    }

    /**
     * URL форматы
     */
    private function toGoogleMapsUrl(): string
    {
        return sprintf(
            'https://www.google.com/maps/search/?api=1&query=%s,%s',
            $this->latitude,
            $this->longitude
        );
    }

    private function toOpenStreetMapUrl(): string
    {
        return sprintf(
            'https://www.openstreetmap.org/?mlat=%s&mlon=%s#map=15/%s/%s',
            $this->latitude,
            $this->longitude,
            $this->latitude,
            $this->longitude
        );
    }

    private function toYandexMapsUrl(): string
    {
        return sprintf(
            'https://yandex.ru/maps/?pt=%s,%s&z=15&l=map',
            $this->longitude,
            $this->latitude
        );
    }

    /**
     * Как ассоциативный массив
     */
    public function toArray(): array
    {
        return [
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'lat' => $this->latitude,
            'lng' => $this->longitude,
        ];
    }

    /**
     * Как индексированный массив (GeoJSON порядок: [lng, lat])
     */
    public function toList(): array
    {
        return [$this->longitude, $this->latitude];
    }

    /**
     * Идентификатор (хеш координат)
     */
    public function getId(): string
    {
        return md5("{$this->latitude}:{$this->longitude}");
    }

    /**
     * Расстояние до другой точки (в метрах, формула Haversine)
     */
    public function distanceTo(Point $point): float
    {
        $earthRadius = 6371000; // метры

        $latFrom = deg2rad($this->latitude);
        $lonFrom = deg2rad($this->longitude);
        $latTo = deg2rad($point->latitude);
        $lonTo = deg2rad($point->longitude);

        $latDelta = $latTo - $latFrom;
        $lonDelta = $lonTo - $lonFrom;

        $a = sin($latDelta / 2) ** 2 +
            cos($latFrom) * cos($latTo) *
            sin($lonDelta / 2) ** 2;

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }

    /**
     * Проверка равенства точек (с учетом погрешности)
     */
    public function equals(Point $point, float $precision = 0.000001): bool
    {
        return abs($this->latitude - $point->latitude) < $precision &&
            abs($this->longitude - $point->longitude) < $precision;
    }

    /**
     * Создание точки из строки
     */
    public static function fromString(string $value, PointFormat $format = PointFormat::LAT_LNG): self
    {
        return match ($format) {
            PointFormat::LAT_LNG => self::fromLatLng($value),
            PointFormat::LNG_LAT => self::fromLngLat($value),
            PointFormat::WKT => self::fromWKT($value),
            PointFormat::GEOJSON => self::fromGeoJson($value),
            default => throw new \InvalidArgumentException("Format {$format->value} is not supported for parsing"),
        };
    }

    private static function fromLatLng(string $value): self
    {
        $parts = preg_split('/[,\s]+/', trim($value));
        if (count($parts) !== 2) {
            throw new \InvalidArgumentException('Invalid LAT_LNG format. Expected: "lat,lng"');
        }
        return new self((float) $parts[0], (float) $parts[1]);
    }

    private static function fromLngLat(string $value): self
    {
        $parts = preg_split('/[,\s]+/', trim($value));
        if (count($parts) !== 2) {
            throw new \InvalidArgumentException('Invalid LNG_LAT format. Expected: "lng,lat"');
        }
        return new self((float) $parts[1], (float) $parts[0]);
    }

    private static function fromWKT(string $value): self
    {
        if (preg_match('/POINT\s*\(\s*([0-9.-]+)\s+([0-9.-]+)\s*\)/i', $value, $matches)) {
            return new self((float) $matches[2], (float) $matches[1]);
        }
        throw new \InvalidArgumentException('Invalid WKT format. Expected: "POINT(lng lat)"');
    }

    private static function fromGeoJson(string $value): self
    {
        $data = json_decode($value, true, 512, JSON_THROW_ON_ERROR);
        if (($data['type'] ?? null) !== 'Point' || !isset($data['coordinates'])) {
            throw new \InvalidArgumentException('Invalid GeoJSON format');
        }
        if (count($data['coordinates']) !== 2) {
            throw new \InvalidArgumentException('Invalid GeoJSON coordinates');
        }
        return new self($data['coordinates'][1], $data['coordinates'][0]);
    }

    /**
     * Создание из массива
     */
    public static function fromArray(array $data): self
    {
        $lat = $data['latitude'] ?? $data['lat'] ?? null;
        $lng = $data['longitude'] ?? $data['lng'] ?? null;

        if ($lat === null || $lng === null) {
            throw new \InvalidArgumentException('Array must contain latitude/lat and longitude/lng keys');
        }

        return new self((float) $lat, (float) $lng);
    }

    /**
     * Создание из списка [lng, lat]
     */
    public static function fromList(array $data): self
    {
        if (count($data) !== 2) {
            throw new \InvalidArgumentException('List must contain exactly 2 elements [lng, lat]');
        }

        return new self((float) $data[1], (float) $data[0]);
    }

    /**
     * Для удобного вывода
     */
    public function __toString(): string
    {
        return $this->format();
    }

    public function toJson($options = 0): string
    {
        return json_encode($this->toArray(), $options | JSON_THROW_ON_ERROR);
    }
}