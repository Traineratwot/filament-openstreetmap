<?php

namespace Traineratwot\FilamentOpenStreetMap\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use Traineratwot\FilamentOpenStreetMap\Data\Point;
use Traineratwot\FilamentOpenStreetMap\Enums\PointFormat;

class PointCast implements CastsAttributes
{
    public function __construct(
        protected PointFormat|string|null $format = null
    )
    {
        if(is_string($format)) {
            $this->format = PointFormat::tryFrom($format);
        }
    }

    /**
     * Преобразование значения из базы данных в Point объект
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): ?Point
    {
        if ($value === null) {
            return null;
        }

        try {
            return Point::fromValue($value, $this->format);
        } catch (\Exception $e) {
            throw new \InvalidArgumentException("Unable to cast value to Point: {$e->getMessage()}");
        }
    }

    /**
     * Преобразование Point объекта для сохранения в базу данных
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): ?string
    {
        if ($value === null) {
            return null;
        }

        try {
            // Преобразуем любое значение в Point через fromValue
            $point = Point::fromValue($value, $this->format);

            // Сохраняем в JSON формате
            return $point->toJson();
        } catch (\Exception $e) {
            throw new \InvalidArgumentException("Unable to cast value to Point for storage: {$e->getMessage()}");
        }
    }
}