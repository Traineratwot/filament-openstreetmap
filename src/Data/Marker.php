<?php

namespace Traineratwot\FilamentOpenStreetMap\Data;

class Marker
{
    public function __construct(
        public ?string $title,
        public Point $point,
        public string $color = '#3388ff',
    ) {
    }

    public static function fromArray(array $data): self
    {
        $point = $data['point'] ?? null;
        if (is_array($point)) {
            $point = Point::fromValue($point);
        }
        if (!$point instanceof Point) {
            throw new \InvalidArgumentException('Marker requires a valid point');
        }

        return new self(
            title: $data['title'] ?? null,
            point: $point,
            color: $data['color'] ?? '#3388ff',
        );
    }

    public function toArray(): array
    {
        return [
            'title' => $this->title,
            'lat' => $this->point->latitude,
            'lng' => $this->point->longitude,
            'color' => $this->color,
        ];
    }
}
