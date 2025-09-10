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
        Schema::create('hydroponic_plants', function (Blueprint $table) {
            $table->id();
            $table->string('plant_type')->default('fodder_jagung')->comment('Type of hydroponic plant');
            $table->string('variety')->nullable()->comment('Plant variety');
            $table->string('location')->comment('Growing location/system');
            $table->date('planting_date')->comment('Date when planted');
            $table->date('expected_harvest_date')->comment('Expected harvest date');
            $table->date('actual_harvest_date')->nullable()->comment('Actual harvest date');
            $table->decimal('harvest_weight_kg', 8, 2)->nullable()->comment('Harvest weight in kg');
            $table->enum('status', ['growing', 'harvested', 'failed'])->default('growing');
            $table->text('notes')->nullable()->comment('Additional notes');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('plant_type');
            $table->index('location');
            $table->index('planting_date');
            $table->index('expected_harvest_date');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hydroponic_plants');
    }
};