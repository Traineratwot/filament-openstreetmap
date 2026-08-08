<?php

namespace Traineratwot\FilamentOpenStreetMap\Forms\Components;

use Closure;
use Filament\Forms\Components\Field;
use Traineratwot\FilamentOpenStreetMap\Data\Marker;
use Traineratwot\FilamentOpenStreetMap\Data\Point;
use Traineratwot\FilamentOpenStreetMap\Enums\PointFormat;

class MapInput extends Field
{
    protected string $view = 'filament-openstreetmap::forms.components.map';

    protected array $defaultPosition = [55.75, 37.61];
    protected int $defaultZoom = 13;

    protected PointFormat $saveFormat = PointFormat::LAT_LNG;
    protected PointFormat $loadFormat = PointFormat::LAT_LNG;
    protected string $placeholder = '';
    protected array|Closure $markers = [];
    protected bool|Closure $markersOnly = false;

    public function getPlaceholder(): string
    {
        return $this->placeholder;
    }

    public function placeholder(mixed $placeholder): void
    {
        $this->placeholder = $this->evaluate($placeholder);
    }

    protected function setUp(): void
    {
        parent::setUp();
        $this->placeholder(__('filament-openstreetmap::input.placeholder'));
        $this->dehydrateStateUsing(static function (MapInput $component, mixed $state): ?string {
            if ($state) {
                return Point::fromValue($state, $component->getLoadFormat())->format($component->getSaveFormat());
            }
            return null;
        });
        $this->afterStateHydrated(function (MapInput $component, mixed $state) {
            if ($state) {
                $component->state(Point::fromValue($state, $component->getSaveFormat())->format($component->getLoadFormat()));
            }
        });
    }

    public function defaultPosition(float $lat, float $lng): static
    {
        $this->defaultPosition = [$lat, $lng];
        return $this;
    }

    public function defaultZoom(int $zoom): static
    {
        $this->defaultZoom = $zoom;
        return $this;
    }

    /**
     * Формат для сохранения в БД
     */
    public function saveFormat(PointFormat $format): static
    {
        $this->saveFormat = $format;
        return $this;
    }

    public function getDefaultPosition(): array
    {
        return $this->defaultPosition;
    }

    public function getDefaultZoom(): int
    {
        return $this->defaultZoom;
    }

    protected function getSaveFormat()
    {
        return $this->saveFormat;
    }

    protected function getLoadFormat()
    {
        return $this->loadFormat;
    }

    public function markers(array|Closure $markers): static
    {
        $this->markers = $markers;
        return $this;
    }

    public function getMarkers(): array
    {
        $markers = $this->evaluate($this->markers);

        return array_map(fn($marker) =>
            ($marker instanceof Marker ? $marker : Marker::fromArray($marker))->toArray(),
            $markers
        );
    }

    public function markersOnly(bool|Closure $condition = true): static
    {
        $this->markersOnly = $condition;
        return $this;
    }

    public function getMarkersOnly(): bool
    {
        return (bool) $this->evaluate($this->markersOnly);
    }

}
