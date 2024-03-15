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
        Schema::create('ruls', function (Blueprint $table) {
            $table->id();
            $table->text('rule');
            $table->foreignId('riad_id')->nullable()->constrained('riads');
            $table->foreignId('drriad_id')->nullable()->constrained('dr_riads');
            $table->enum('status' , ['Allow' , 'Do Not Allowed'])->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ruls');
    }
};
