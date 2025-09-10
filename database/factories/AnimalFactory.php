<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Animal>
 */
class AnimalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['domba', 'ayam_petelur', 'ikan'];
        $type = fake()->randomElement($types);
        
        $breeds = [
            'domba' => ['Merino', 'Suffolk', 'Dorper', 'Texel', 'Romney'],
            'ayam_petelur' => ['Leghorn', 'Rhode Island Red', 'Lohmann Brown', 'Isa Brown'],
            'ikan' => ['Lele', 'Nila', 'Gurame', 'Mas', 'Patin']
        ];

        return [
            'type' => $type,
            'breed' => fake()->randomElement($breeds[$type]),
            'enclosure' => fake()->randomElement(['Kandang A', 'Kandang B', 'Kolam 1', 'Kolam 2', 'Area C']),
            'birth_date' => fake()->dateTimeBetween('-2 years', '-1 month'),
            'weight' => fake()->randomFloat(2, 0.5, 100),
            'reproductive_status' => fake()->randomElement(['breeding', 'pregnant', 'lactating', 'juvenile', 'mature']),
            'health_status' => fake()->randomElement(['healthy', 'sick', 'recovering', 'quarantine']),
            'notes' => fake()->optional(0.3)->paragraph(),
        ];
    }

    /**
     * Indicate that the animal is healthy.
     */
    public function healthy(): static
    {
        return $this->state(fn (array $attributes) => [
            'health_status' => 'healthy',
        ]);
    }

    /**
     * Indicate that the animal is sick.
     */
    public function sick(): static
    {
        return $this->state(fn (array $attributes) => [
            'health_status' => 'sick',
        ]);
    }
}