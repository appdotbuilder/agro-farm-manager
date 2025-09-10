<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inventory_items', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Item name');
            $table->enum('category', ['feed', 'medicine', 'seeds', 'nutrients', 'equipment'])->comment('Item category');
            $table->string('unit')->comment('Unit of measurement (kg, liter, piece, etc.)');
            $table->decimal('current_stock', 10, 2)->default(0)->comment('Current stock quantity');
            $table->decimal('minimum_stock', 10, 2)->default(0)->comment('Minimum stock alert level');
            $table->decimal('unit_cost', 10, 2)->comment('Cost per unit');
            $table->string('supplier')->nullable()->comment('Supplier name');
            $table->date('last_purchase_date')->nullable()->comment('Last purchase date');
            $table->date('expiry_date')->nullable()->comment('Expiry date if applicable');
            $table->text('notes')->nullable()->comment('Additional notes');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('name');
            $table->index('category');
            $table->index('current_stock');
            $table->index('minimum_stock');
            $table->index('expiry_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventory_items');
    }
};