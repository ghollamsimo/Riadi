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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('riad_id')->nullable()->constrained('riads')->onDelete('cascade');
            $table->foreignId('client_id')->nullable()->constrained('clients');
            $table->integer('guests');
            $table->integer('night');
            $table->enum('status', ['Booked', 'Available' , 'Pending' , 'Waiting'])->default('Available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
