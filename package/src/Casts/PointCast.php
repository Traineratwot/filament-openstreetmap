<?php

namespace Traineratwot\FilamentOpenStreetMap\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use Traineratwot\FilamentOpenStreetMap\Data\Point;
use Traineratwot\FilamentOpenStreetMap\Enums\PointFormat;

class PointCast implements CastsAttributes
{
    public function __construct(
        protected PointFormat $format = PointFormat::LAT_LNG
    )
    {
    }

    /**
     * Преобразование значения из базы данных в Point объект
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): ?Point
    {
        if ($value === null) {
            return null;
        }

        // Если это уже Point объект
        if ($value instanceof Point) {
            return $value;
        }

        // Если это JSON строка
        if (is_string($value) && $this->isJson($value)) {
            try {
                $data = json_decode($value, true, 512, JSON_THROW_ON_ERROR);
                return Point::fromArray($data);
            } catch (\JsonException $e) {
                throw new \InvalidArgumentException("Invalid JSON for Point: {$e->getMessage()}");
            }
        }

        // Если это строка в определенном формате
        if (is_string($value)) {
            return Point::fromString($value, $this->format);
        }

        // Если это массив
        if (is_array($value)) {
            return Point::fromArray($value);
        }

        throw new \InvalidArgumentException('Unable to cast value to Point');
    }

    /**
     * Преобразование Point объекта для сохранения в базу данных
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): ?string
    {
        if ($value === null) {
            return null;
        }

        // Если это уже Point объект
        if ($value instanceof Point) {
            return $value->toJson();
        }

        // Если это массив
        if (is_array($value)) {
            $point = Point::fromArray($value);
            return $point->toJson();
        }

        // Если это строка
        if (is_string($value)) {
            if ($this->isJson($value)) {
                // Валидируем JSON
                $point = Point::fromArray(json_decode($value, true, 512, JSON_THROW_ON_ERROR));
                return $point->toJson();
            }

            $point = Point::fromString($value, $this->format);
            return $point->toJson();
        }

        throw new \InvalidArgumentException('Unable to cast value to Point for storage');
    }

    /**
     * Проверка, является ли строка JSON
     */
    private function isJson(string $value): bool
    {
        if (empty($value)) {
            return false;
        }

        return json_validate($value);
    }
}