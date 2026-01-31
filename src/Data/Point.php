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
     * @throws \JsonException
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
     * Универсальный метод создания точки из любого формата
     *
     * @param string|array|self $value Значение для парсинга
     * @param PointFormat|null $format Формат (если null - автоопределение)
     * @return self
     * @throws \InvalidArgumentException
     * @throws \JsonException
     */
    public static function fromValue(string|array|self $value, ?PointFormat $format = null): self
    {
        // Если уже Point - возвращаем как есть
        if ($value instanceof self) {
            return $value;
        }
        do {
            if(is_string($value) && json_validate($value)){
                $value = json_decode(trim(strval($value)), true);
            }
        }while(is_string($value) && json_validate($value));
        // Если массив
        if (is_array($value)) {
            return self::fromArrayAuto($value);
        }
        // Если строка
        if ($format !== null) {
            return self::fromString($value, $format);
        }

        // Автоопределение формата строки
        return self::fromStringAuto($value);
    }

    /**
     * Автоопределение формата массива
     */
    private static function fromArrayAuto(array $data): self
    {
        // Проверяем наличие ключей latitude/longitude или lat/lng
        if (isset($data['latitude']) || isset($data['lat']) || isset($data['longitude']) || isset($data['lng'])) {
            return self::fromArray($data);
        }

        // Проверяем индексированный массив [lng, lat]
        if (isset($data[0]) && isset($data[1]) && count($data) === 2 && is_numeric($data[0]) && is_numeric($data[1])) {
            return self::fromList($data);
        }

        // Проверяем GeoJSON формат
        if (isset($data['type']) && $data['type'] === 'Point' && isset($data['coordinates'])) {
            if (count($data['coordinates']) === 2) {
                return new self($data['coordinates'][1], $data['coordinates'][0]);
            }
        }

        throw new \InvalidArgumentException('Unable to determine array format. Expected associative array with lat/lng keys, indexed array [lng, lat], or GeoJSON format');
    }

    /**
     * Автоопределение формата строки
     */
    private static function fromStringAuto(string $value): self
    {
        $value = trim($value);

        // WKT формат: POINT(lng lat)
        if (preg_match('/^POINT\s*\(/i', $value)) {
            return self::fromWKT($value);
        }

        // GeoJSON формат (JSON строка)
        if (str_starts_with($value, '{')) {
            try {
                return self::fromGeoJson($value);
            } catch (\Exception $e) {
                // Не GeoJSON, продолжаем проверку
            }
        }

        // URL форматы
        if (str_contains($value, 'google.com/maps')) {
            return self::fromGoogleMapsUrl($value);
        }
        if (str_contains($value, 'openstreetmap.org')) {
            return self::fromOpenStreetMapUrl($value);
        }
        if (str_contains($value, 'yandex.ru/maps')) {
            return self::fromYandexMapsUrl($value);
        }

        // Простой формат с запятой: lat,lng или lng,lat
        if (preg_match('/^([0-9.-]+)[,\s]+([0-9.-]+)$/', $value)) {
            // Пробуем определить порядок по диапазонам значений
            $parts = preg_split('/[,\s]+/', $value);
            $first = (float) $parts[0];
            $second = (float) $parts[1];

            // Если первое значение в диапазоне широты (-90, 90), считаем это LAT_LNG
            if (abs($first) <= 90 && abs($second) <= 180) {
                return self::fromLatLng($value);
            }
            // Если первое значение больше 90, считаем это LNG_LAT
            if (abs($first) <= 180 && abs($second) <= 90) {
                return self::fromLngLat($value);
            }
        }

        throw new \InvalidArgumentException("Unable to determine format for value: {$value}");
    }

    /**
     * Парсинг из URL Google Maps
     */
    private static function fromGoogleMapsUrl(string $url): self
    {
        // Формат: https://www.google.com/maps/search/?api=1&query=LAT,LNG
        if (preg_match('/query=([0-9.-]+),([0-9.-]+)/', $url, $matches)) {
            return new self((float) $matches[1], (float) $matches[2]);
        }
        // Формат: https://www.google.com/maps/@LAT,LNG,15z
        if (preg_match('/@([0-9.-]+),([0-9.-]+)/', $url, $matches)) {
            return new self((float) $matches[1], (float) $matches[2]);
        }
        throw new \InvalidArgumentException('Invalid Google Maps URL format');
    }

    /**
     * Парсинг из URL OpenStreetMap
     */
    private static function fromOpenStreetMapUrl(string $url): self
    {
        // Формат: https://www.openstreetmap.org/?mlat=LAT&mlon=LNG
        if (preg_match('/mlat=([0-9.-]+)&mlon=([0-9.-]+)/', $url, $matches)) {
            return new self((float) $matches[1], (float) $matches[2]);
        }
        // Формат: https://www.openstreetmap.org/#map=15/LAT/LNG
        if (preg_match('/#map=\d+\/([0-9.-]+)\/([0-9.-]+)/', $url, $matches)) {
            return new self((float) $matches[1], (float) $matches[2]);
        }
        throw new \InvalidArgumentException('Invalid OpenStreetMap URL format');
    }

    /**
     * Парсинг из URL Yandex Maps
     */
    private static function fromYandexMapsUrl(string $url): self
    {
        // Формат: https://yandex.ru/maps/?pt=LNG,LAT
        if (preg_match('/pt=([0-9.-]+),([0-9.-]+)/', $url, $matches)) {
            return new self((float) $matches[2], (float) $matches[1]);
        }
        // Формат: https://yandex.ru/maps/?ll=LNG,LAT
        if (preg_match('/ll=([0-9.-]+),([0-9.-]+)/', $url, $matches)) {
            return new self((float) $matches[2], (float) $matches[1]);
        }
        throw new \InvalidArgumentException('Invalid Yandex Maps URL format');
    }

    /**
     * Создание точки из строки с указанным форматом
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
        $name = $data['name'] ?? null;

        if ($lat === null || $lng === null) {
            throw new \InvalidArgumentException('Array must contain latitude/lat and longitude/lng keys');
        }

        return new self((float) $lat, (float) $lng, $name);
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