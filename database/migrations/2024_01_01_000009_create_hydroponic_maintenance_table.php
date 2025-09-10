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
        Schema::create('hydroponic_maintenance', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hydroponic_plant_id')->constrained()->onDelete('cascade');
            $table->date('maintenance_date')->comment('Date of maintenance');
            $table->enum('type', ['cleaning', 'nutrient_change', 'problem_fix', 'inspection'])->comment('Type of maintenance');
            $table->text('description')->comment('Description of maintenance performed');
            $table->text('problems_found')->nullable()->comment('Problems identified');
            $table->text('actions_taken')->nullable()->comment('Actions taken to resolve issues');
            $table->decimal('cost', 10, 2)->default(0)->comment('Cost of maintenance');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('hydroponic_plant_id');
            $table->index('maintenance_date');
            $table->index('type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hydroponic_maintenance');
    }
};