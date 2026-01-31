<?php

namespace App\Filament\Resources\Points\Pages;

use App\Filament\Resources\Points\PointResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePoint extends CreateRecord
{
    protected static string $resource = PointResource::class;

    protected function getHeaderActions(): array
    {
        return [

        ];
    }
}
