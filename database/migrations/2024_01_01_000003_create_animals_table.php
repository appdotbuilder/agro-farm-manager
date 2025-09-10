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
        Schema::create('animals', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['domba', 'ayam_petelur', 'ikan'])->comment('Type of animal');
            $table->string('breed')->comment('Animal breed');
            $table->string('enclosure')->comment('Cage or pond location');
            $table->date('birth_date')->nullable()->comment('Birth date of the animal');
            $table->decimal('weight', 8, 2)->nullable()->comment('Current weight in kg');
            $table->enum('reproductive_status', ['breeding', 'pregnant', 'lactating', 'juvenile', 'mature'])->default('juvenile');
            $table->enum('health_status', ['healthy', 'sick', 'recovering', 'quarantine'])->default('healthy');
            $table->text('notes')->nullable()->comment('Additional notes');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('type');
            $table->index('enclosure');
            $table->index(['type', 'health_status']);
            $table->index(['type', 'reproductive_status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animals');
    }
};