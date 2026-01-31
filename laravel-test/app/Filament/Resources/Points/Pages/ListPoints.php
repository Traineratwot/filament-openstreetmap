<?php

namespace App\Filament\Resources\Points\Pages;

use App\Filament\Resources\Points\PointResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPoints extends ListRecords
{
    protected static string $resource = PointResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
