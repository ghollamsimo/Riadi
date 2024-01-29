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
        Schema::create('riads', function (Blueprint $table) {
            $table->bigIncrements('idriad');
            $table->string('Title');
            $table->string('Localisation');
            $table->text('Description');
            $table->text('Image');
            $table->date('Date');
            $table->id('Prix');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('riads');
    }
};
