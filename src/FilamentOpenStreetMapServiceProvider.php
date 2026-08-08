<?php

namespace Traineratwot\FilamentOpenStreetMap;

use Filament\Facades\Filament;
use Filament\Forms\Form;
use Filament\Support\Facades\FilamentView;
use Filament\View\PanelsRenderHook;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\HtmlString;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentOpenStreetMapServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-openstreetmap';

    public static string $viewNamespace = 'filament-openstreetmap';

    public function boot(): void
    {
        parent::boot();
        $this->injectAssets();

        $this->publishes([
            __DIR__.'/../resources/leaflet' => public_path('vendor/filament-openstreetmap/leaflet'),
            __DIR__.'/../resources/js' => public_path('vendor/filament-openstreetmap/js'),
            __DIR__.'/../resources/css' => public_path('vendor/filament-openstreetmap/css'),
        ], 'filament-openstreetmap-assets');

    }

    protected function injectAssets(): void
    {
        FilamentView::registerRenderHook(
            PanelsRenderHook::HEAD_START,
            function () {
                $cssUrl = asset('vendor/filament-openstreetmap/css/map.css');
                $jsUrl = asset('vendor/filament-openstreetmap/js/map.js');
                return new HtmlString(
                    '<link rel="stylesheet" href="' . $cssUrl . '">'
                    . '<script src="' . $jsUrl . '"></script>'
                );
            }
        );
    }

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
