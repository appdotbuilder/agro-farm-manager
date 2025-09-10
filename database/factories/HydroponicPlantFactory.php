<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HydroponicPlant>
 */
class HydroponicPlantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $plantingDate = fake()->dateTimeBetween('-3 months', 'now');
        $expectedHarvestDate = (clone $plantingDate)->modify('+7 days');
        
        return [
            'plant_type' => 'fodder_jagung',
            'variety' => fake()->randomElement(['Hibrida NK', 'Pioneer', 'Bisi', 'Dekalb']),
            'location' => fake()->randomElement(['Greenhouse A', 'Greenhouse B', 'Rak 1', 'Rak 2', 'Area Indoor']),
            'planting_date' => $plantingDate,
            'expected_harvest_date' => $expectedHarvestDate,
            'actual_harvest_date' => fake()->optional(0.4)->dateTimeBetween($expectedHarvestDate, '+14 days'),
            'harvest_weight_kg' => fake()->optional(0.4)->randomFloat(2, 1, 50),
            'status' => fake()->randomElement(['growing', 'harvested', 'failed']),
            'notes' => fake()->optional(0.3)->paragraph(),
        ];
    }

    /**
     * Indicate that the plant is still growing.
     */
    public function growing(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'growing',
            'actual_harvest_date' => null,
            'harvest_weight_kg' => null,
        ]);
    }

    /**
     * Indicate that the plant has been harvested.
     */
    public function harvested(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'harvested',
            'actual_harvest_date' => fake()->dateTimeBetween($attributes['expected_harvest_date'], '+14 days'),
            'harvest_weight_kg' => fake()->randomFloat(2, 1, 50),
        ]);
    }
}