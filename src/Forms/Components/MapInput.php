<?php

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
     * @var float|int| Closure
     */
    protected float|int|Closure $x = 0;
    /**
     * longitude
     * долгота
     * @var float|int| Closure
     */
    protected float|int|Closure $y = 0;

    public function latitude(float|int|Closure $x): self
    {
        $this->x = $x;
        return $this;
    }

    public function longitude(float|int|Closure $y): self
    {
        $this->y = $y;
        return $this;
    }

    public function coordinates(float|int|Closure $x, float|int|Closure $y): self
    {
        $this->x = $x;
        $this->y = $y;
        return $this;
    }

    public function getX(): ?int
    {
        return $this->evaluate($this->x) ?: 0;
    }

    public function getY(): ?int
    {
        return $this->evaluate($this->y) ?: 0;
    }
}
