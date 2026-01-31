<?php

namespace Traineratwot\FilamentOpenStreetMap\Forms\Components;

use Filament\Forms\Components\Field;

class MapInput extends Field
{
    protected string $view = 'filament-openstreetmap::forms.components.map';

    protected array $defaultPosition = [51.505, -0.09];
    protected int $defaultZoom = 13;

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

    public function getDefaultPosition(): array
    {
        return $this->defaultPosition;
    }

    public function getDefaultZoom(): int
    {
        return $this->defaultZoom;
    }
}