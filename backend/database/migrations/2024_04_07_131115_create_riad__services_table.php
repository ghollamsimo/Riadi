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
        Schema::create('riad__services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('riad_id')->nullable()->constrained('riads');
            $table->foreignId('service_id')->nullable()->constrained('services');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('riad__services');
    }
};
