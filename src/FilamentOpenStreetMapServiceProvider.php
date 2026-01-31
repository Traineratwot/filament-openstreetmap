<?php

namespace Traineratwot\FilamentOpenStreetMap;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentOpenStreetMapServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-openstreetmap';

    public static string $viewNamespace = 'filament-openstreetmap';
    public function configurePackage(Package $package): void
    {
        $package->name(static::$name)
        ;
        if (file_exists($package->basePath('/../resources/lang'))) {
            $package->hasTranslations();
        }

        if (file_exists($package->basePath('/../resources/views'))) {
            $package->hasViews(static::$viewNamespace);
        }
    }
}