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
        Schema::create('hydroponic_parameters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hydroponic_plant_id')->constrained()->onDelete('cascade');
            $table->date('measurement_date')->comment('Date of measurement');
            $table->time('measurement_time')->comment('Time of measurement');
            $table->string('nutrient_type')->comment('Type of nutrient used');
            $table->decimal('ppm_concentration', 8, 1)->comment('PPM concentration level');
            $table->decimal('ph_level', 3, 1)->comment('pH level of water');
            $table->decimal('water_temperature', 4, 1)->comment('Water temperature in Celsius');
            $table->text('notes')->nullable()->comment('Additional observations');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('hydroponic_plant_id');
            $table->index('measurement_date');
            $table->index(['hydroponic_plant_id', 'measurement_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hydroponic_parameters');
    }
};