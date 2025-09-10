<?php

namespace Database\Factories;

use App\Models\Animal;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = fake()->randomElement(['purchase', 'sale']);
        $quantity = fake()->numberBetween(1, 10);
        $unitPrice = fake()->randomFloat(2, 50000, 5000000);
        
        return [
            'animal_id' => Animal::factory(),
            'type' => $type,
            'transaction_date' => fake()->dateTimeBetween('-1 year', 'now'),
            'buyer_seller' => fake()->name(),
            'quantity' => $quantity,
            'unit_price' => $unitPrice,
            'total_amount' => $quantity * $unitPrice,
            'notes' => fake()->optional(0.3)->paragraph(),
        ];
    }

    /**
     * Indicate that this is a purchase transaction.
     */
    public function purchase(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'purchase',
            'buyer_seller' => fake()->company(),
        ]);
    }

    /**
     * Indicate that this is a sale transaction.
     */
    public function sale(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'sale',
            'buyer_seller' => fake()->name(),
        ]);
    }
}