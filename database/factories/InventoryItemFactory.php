<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InventoryItem>
 */
class InventoryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['feed', 'medicine', 'seeds', 'nutrients', 'equipment'];
        $category = fake()->randomElement($categories);
        
        $items = [
            'feed' => [
                ['name' => 'Pakan Ayam Petelur', 'unit' => 'kg'],
                ['name' => 'Pakan Domba', 'unit' => 'kg'],
                ['name' => 'Pelet Ikan', 'unit' => 'kg'],
                ['name' => 'Konsentrat', 'unit' => 'kg'],
            ],
            'medicine' => [
                ['name' => 'Antibiotik', 'unit' => 'botol'],
                ['name' => 'Vitamin B Complex', 'unit' => 'botol'],
                ['name' => 'Vaksin Newcastle', 'unit' => 'vial'],
                ['name' => 'Obat Cacing', 'unit' => 'tablet'],
            ],
            'seeds' => [
                ['name' => 'Benih Jagung Hibrida', 'unit' => 'kg'],
                ['name' => 'Benih Jagung Pioneer', 'unit' => 'kg'],
                ['name' => 'Benih Fodder', 'unit' => 'kg'],
            ],
            'nutrients' => [
                ['name' => 'Nutrisi AB Mix', 'unit' => 'liter'],
                ['name' => 'Cal Mag', 'unit' => 'liter'],
                ['name' => 'pH Up', 'unit' => 'liter'],
                ['name' => 'pH Down', 'unit' => 'liter'],
            ],
            'equipment' => [
                ['name' => 'pH Meter', 'unit' => 'unit'],
                ['name' => 'TDS Meter', 'unit' => 'unit'],
                ['name' => 'Selang Air', 'unit' => 'meter'],
                ['name' => 'Sprayer', 'unit' => 'unit'],
            ]
        ];
        
        $item = fake()->randomElement($items[$category]);
        $currentStock = fake()->randomFloat(2, 0, 1000);
        $minimumStock = fake()->randomFloat(2, 10, 100);
        
        return [
            'name' => $item['name'],
            'category' => $category,
            'unit' => $item['unit'],
            'current_stock' => $currentStock,
            'minimum_stock' => $minimumStock,
            'unit_cost' => fake()->randomFloat(2, 1000, 50000),
            'supplier' => fake()->optional(0.7)->company(),
            'last_purchase_date' => fake()->optional(0.6)->dateTimeBetween('-6 months', 'now'),
            'expiry_date' => fake()->optional(0.5)->dateTimeBetween('+1 month', '+2 years'),
            'notes' => fake()->optional(0.2)->sentence(),
        ];
    }

    /**
     * Indicate that the item has low stock.
     */
    public function lowStock(): static
    {
        return $this->state(fn (array $attributes) => [
            'current_stock' => fake()->randomFloat(2, 0, $attributes['minimum_stock']),
        ]);
    }

    /**
     * Indicate that the item is expired.
     */
    public function expired(): static
    {
        return $this->state(fn (array $attributes) => [
            'expiry_date' => fake()->dateTimeBetween('-1 year', '-1 day'),
        ]);
    }
}