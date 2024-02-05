<?php

namespace Traineratwot\FilamentOpenStreetMap\Rules;

use Closure;
use Exception;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;
use MatanYadaev\EloquentSpatial\Objects\Point;

class GeoPoint implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  Closure(string): PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        try {
            $point = null;
            if ($value instanceof Point) {
                $point = [
                    'latitude' => $value->latitude,
                    'longitude' => $value->longitude,
                ];
            }
            if (is_string($value)) {
                $_value = explode(',', $value);
                if (count($_value) !== 2) {
                    $fail("The {$attribute} must be a valid geo point.");
                }

                $point = [
                    'latitude' => (float) $_value[0],
                    'longitude' => (float) $_value[1],
                ];
            }
            if (is_array($value)) {
                if (isset($value['type']) && $value['type'] === 'Point') {
                    $point = [
                        'latitude' => $value['coordinates'][1],
                        'longitude' => $value['coordinates'][0],
                    ];
                } elseif (count($value) !== 2) {
                    $fail("The {$attribute} must be a valid geo point.");
                } else {
                    $point = [
                        'latitude' => (float) $value[0],
                        'longitude' => (float) $value[1],
                    ];
                }
            }
            if (! is_numeric($point['latitude']) || ! is_numeric($point['longitude'])) {
                $fail("The {$attribute} must be a valid geo point.");
            }
        } catch (Exception $e) {
            $fail("The {$attribute} must be a valid geo point.");
        }
    }
}
