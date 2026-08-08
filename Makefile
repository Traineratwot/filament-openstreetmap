.PHONY: dev

dev:
	cd laravel-test && composer update traineratwot/filament-openstreetmap
	cd laravel-test && php artisan vendor:publish --tag=filament-openstreetmap-assets --force --ansi
	cd laravel-test && php artisan vendor:publish --tag=laravel-views --force --ansi 2>/dev/null; true
	cd laravel-test && cp -f ../resources/views/forms/components/map.blade.php resources/views/vendor/filament-openstreetmap/forms/components/map.blade.php
	cd laravel-test && php artisan view:clear && php artisan config:clear
	cd laravel-test && php artisan vendor:publish --tag=filament-openstreetmap-assets --force
	cd laravel-test && composer dev
