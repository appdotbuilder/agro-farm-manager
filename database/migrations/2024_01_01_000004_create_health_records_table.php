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
        Schema::create('health_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('animal_id')->constrained()->onDelete('cascade');
            $table->date('record_date')->comment('Date of health record');
            $table->enum('type', ['vaccination', 'treatment', 'checkup', 'medication'])->comment('Type of health record');
            $table->string('treatment')->comment('Treatment or medication given');
            $table->text('symptoms')->nullable()->comment('Symptoms observed');
            $table->text('diagnosis')->nullable()->comment('Veterinary diagnosis');
            $table->decimal('cost', 10, 2)->default(0)->comment('Cost of treatment');
            $table->date('next_checkup')->nullable()->comment('Next scheduled checkup');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('animal_id');
            $table->index('record_date');
            $table->index('type');
            $table->index('next_checkup');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('health_records');
    }
};