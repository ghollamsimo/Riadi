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
        Schema::create('riad__repas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('riad_id')->nullable()->constrained('riads')->onDelete('cascade');
            $table->foreignId('repa_id')->nullable()->constrained('repas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('riad__repas');
    }
};
