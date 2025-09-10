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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('animal_id')->nullable()->constrained()->onDelete('set null');
            $table->enum('type', ['purchase', 'sale'])->comment('Type of transaction');
            $table->date('transaction_date')->comment('Date of transaction');
            $table->string('buyer_seller')->comment('Name of buyer or seller');
            $table->integer('quantity')->default(1)->comment('Number of animals');
            $table->decimal('unit_price', 12, 2)->comment('Price per animal');
            $table->decimal('total_amount', 12, 2)->comment('Total transaction amount');
            $table->text('notes')->nullable()->comment('Transaction notes');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('animal_id');
            $table->index('type');
            $table->index('transaction_date');
            $table->index(['type', 'transaction_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};