<?php

namespace Database\Seeders;

use App\Models\Animal;
use App\Models\HydroponicPlant;
use App\Models\InventoryItem;
use App\Models\Transaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FarmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create sample animals
        $animals = Animal::factory(15)->create();
        
        // Create some healthy animals
        Animal::factory(10)->healthy()->create();
        
        // Create some sick animals
        Animal::factory(2)->sick()->create();
        
        // Create hydroponic plants
        HydroponicPlant::factory(8)->growing()->create();
        HydroponicPlant::factory(5)->harvested()->create();
        
        // Create inventory items
        InventoryItem::factory(20)->create();
        
        // Create some low stock items
        InventoryItem::factory(5)->lowStock()->create();
        
        // Create transactions for existing animals
        foreach ($animals->random(8) as $animal) {
            Transaction::factory()->purchase()->create([
                'animal_id' => $animal->id,
            ]);
        }
        
        foreach ($animals->random(3) as $animal) {
            Transaction::factory()->sale()->create([
                'animal_id' => $animal->id,
            ]);
        }
    }
}