<?php

/** @noinspection ClassMethodNameMatchesFieldNameInspection */

namespace Traineratwot\FilamentOpenStreetMap\Forms\Components;

use Closure;
use Filament\Forms\Components\Textarea;

class MapInput extends Textarea
{
    protected string $view = 'filament-openstreetmap::forms.components.map';

    protected int|Closure|null $rows = 15;

    /**
     * latitude
     * широта
     */
    protected float|int|Closure $latitude = 0;

    /**
     * longitude
     * долгота
     */
    protected float|int|Closure $longitude = 0;

    public function latitude(float|int|Closure $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function longitude(float|int|Closure $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function coordinates(float|int|Closure $latitude, float|int|Closure $longitude): self
    {
        $this->latitude = $latitude;
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?float
    {
        return $this->evaluate($this->latitude) ?: 0;
    }

    public function getLongitude(): ?float
    {
        return $this->evaluate($this->longitude) ?: 0;
    }
}
