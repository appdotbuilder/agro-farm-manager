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
        Schema::create('feeding_schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('animal_id')->constrained()->onDelete('cascade');
            $table->date('feeding_date')->comment('Date of feeding');
            $table->time('feeding_time')->comment('Time of feeding');
            $table->string('feed_type')->comment('Type of feed given');
            $table->decimal('amount_kg', 8, 2)->comment('Amount of feed in kg');
            $table->decimal('cost_per_kg', 8, 2)->comment('Cost per kg of feed');
            $table->decimal('total_cost', 10, 2)->comment('Total feeding cost');
            $table->text('notes')->nullable()->comment('Additional feeding notes');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('animal_id');
            $table->index('feeding_date');
            $table->index(['animal_id', 'feeding_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feeding_schedules');
    }
};