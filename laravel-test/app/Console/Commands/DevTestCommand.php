<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Traineratwot\FilamentOpenStreetMap\Enums\PointFormat;

class DevTestCommand extends Command
{
    protected $signature = 'dev:test';

    protected $description = 'Command description';

    public function handle()
    {
        foreach (PointFormat::cases() as $p){
           dump($p->getExample());
        }

    }
}
