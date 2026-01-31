<?php

namespace Traineratwot\FilamentOpenStreetMap;

use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Spatie\LaravelPackageTools\Commands\InstallCommand;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentOpenStreetMapServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-openstreetmap';

    public static string $viewNamespace = 'filament-openstreetmap';
    public function configurePackage(Package $package): void
    {
        $package->name(static::$name)
            ->hasInstallCommand(function (InstallCommand $command) {
                $command
                    ->publishConfigFile()
                    ->publishMigrations()
                    ->askToRunMigrations()
                    ->askToStarRepoOnGitHub('traineratwot/filament-openstreetmap');
            });

        if (file_exists($package->basePath('/../resources/lang'))) {
            $package->hasTranslations();
        }

        if (file_exists($package->basePath('/../resources/views'))) {
            $package->hasViews(static::$viewNamespace);
        }
    }

    public function packageBooted(): void
    {
        // Asset Registration
        FilamentAsset::register(
            $this->getAssets(),
            $this->getAssetPackageName()
        );
    }

    protected function getAssetPackageName(): ?string
    {
        return 'traineratwot/filament-openstreetmap';
    }

    protected function getAssets(): array
    {
        return [
            Css::make('filament-openstreetmap-styles', __DIR__.'/../resources/dist/filament-openstreetmap.css'),
            Js::make('filament-openstreetmap-scripts', __DIR__.'/../resources/dist/filament-openstreetmap.js'),
        ];
    }
}