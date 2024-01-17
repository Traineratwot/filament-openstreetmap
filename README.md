# This is my package filament-openstreetmap

[![Latest Version on Packagist](https://img.shields.io/packagist/v/traineratwot/filament-openstreetmap.svg?style=flat-square)](https://packagist.org/packages/traineratwot/filament-openstreetmap)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/traineratwot/filament-openstreetmap/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/traineratwot/filament-openstreetmap/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/traineratwot/filament-openstreetmap/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/traineratwot/filament-openstreetmap/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/traineratwot/filament-openstreetmap.svg?style=flat-square)](https://packagist.org/packages/traineratwot/filament-openstreetmap)



This is where your description should go. Limit it to a paragraph or two. Consider adding a small example.

## Installation

You can install the package via composer:

```bash
composer require traineratwot/filament-openstreetmap
```

You can publish and run the migrations with:

```bash
php artisan vendor:publish --tag="filament-openstreetmap-migrations"
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="filament-openstreetmap-config"
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="filament-openstreetmap-views"
```

This is the contents of the published config file:

```php
return [
];
```

## Usage

```php
$filamentOpenStreetMap = new Traineratwot\FilamentOpenStreetMap();
echo $filamentOpenStreetMap->echoPhrase('Hello, Traineratwot!');
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Traineratwot](https://github.com/Traineratwot)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
