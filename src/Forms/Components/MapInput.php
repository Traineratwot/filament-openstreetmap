<?php

/** @noinspection ClassMethodNameMatchesFieldNameInspection */

namespace Traineratwot\FilamentOpenStreetMap\Forms\Components;

use Closure;
use Filament\Forms\Components\Textarea;
use Illuminate\Support\Facades\Validator;
use MatanYadaev\EloquentSpatial\Objects\Point;
use Traineratwot\FilamentOpenStreetMap\Rules\GeoPoint;

class MapInput extends Textarea
{
    protected string $view = 'filament-openstreetmap::forms.components.map';

    protected int|Closure|null $rows = 15;

    /**
     * @var 'Point'|'String'|'Array'
     */
    public string $saveAs = 'String';

    private Closure|int|float $zoom = 10;

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

    protected function setUp(): void
    {
        parent::setUp();

        $this->afterStateHydrated(static function (MapInput $component, $state): void {
            if (blank($state)) {
                return;
            }
            $value = $component->parseInput($state);
            $component->state("{$value['latitude']},{$value['longitude']}");
        });

        $this->dehydrateStateUsing(static function (MapInput $component, $state) {
            if (blank($state)) {
                return null;
            }
            $value = $component->parseInput($state);
            switch ($component->saveAs) {
                case 'Point':
                    return new Point($value['latitude'], $value['longitude']);
                    break;
                case 'Array':
                    return [$value['latitude'], $value['longitude']];
                    break;
                case 'String':
                default:
                    return "{$value['latitude']},{$value['longitude']}";
                    break;
            }
        });

        $this->rules([new GeoPoint()]);
    }

    public function saveAsPoint(): static
    {
        $this->saveAs = 'Point';

        return $this;
    }

    public function saveAsString(): static
    {
        $this->saveAs = 'String';

        return $this;
    }

    public function saveAsArray(): static
    {
        $this->saveAs = 'Array';

        return $this;
    }

    protected function parseInput(mixed $state): array
    {
        $validator = Validator::make([
            'state' => $state,
        ], [
            'state' => ['required', new GeoPoint()],
        ]);
        if ($validator->fails()) {
            return [
                'latitude' => 0,
                'longitude' => 0,
            ];
        }
        if ($state instanceof Point) {
            return [
                'latitude' => $state->latitude,
                'longitude' => $state->longitude,
            ];
        }
        if (is_array($state)) {

            if (isset($state['type']) && $state['type'] === 'Point') {

                return [
                    'latitude' => $state['coordinates'][1],
                    'longitude' => $state['coordinates'][0],
                ];
            }

            return [
                'latitude' => (float) $state[0],
                'longitude' => (float) $state[1],
            ];
        }

        if (is_string($state)) {
            $_state = explode(',', $state);

            return [
                'latitude' => (float) $_state[0],
                'longitude' => (float) $_state[1],
            ];
        }

        return [
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
        ];
    }

    /**
     * @param  float|int|Closure  $zoom  1-20 (default 10)
     * @return $this
     */
    public function zoom(float|int|Closure $zoom): static
    {
        $this->zoom = $zoom;

        return $this;
    }

    /**
     * @return $this
     */
    public function latitude(float|int|Closure $latitude): static
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * @return $this
     */
    public function longitude(float|int|Closure $longitude): static
    {
        $this->longitude = $longitude;

        return $this;
    }

    /**
     * @return $this
     */
    public function coordinates(float|int|Closure $latitude, float|int|Closure $longitude): static
    {
        $this->latitude = $latitude;
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?float
    {
        $a = $this->parseInput($this->getState());

        return $a['latitude'] ?: $this->evaluate($this->latitude) ?: 0;
    }

    public function getLongitude(): ?float
    {
        $a = $this->parseInput($this->getState());

        return $a['longitude'] ?: $this->evaluate($this->longitude) ?: 0;
    }

    public function getZoom(): ?float
    {
        return $this->evaluate($this->zoom) ?: 10;
    }
}
