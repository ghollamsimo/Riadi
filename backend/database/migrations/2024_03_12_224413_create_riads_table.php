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
        Schema::disableForeignKeyConstraints();
        Schema::create('riads', function (Blueprint $table) {
            $table->id();
            $table->foreignId('categorie_id')->nullable()->constrained('categories');
            $table->string('name');
            $table->string('localisation');
            $table->text('description');
            $table->integer('prix');
            $table->date('date');
            $table->enum('status' , ['Waiting' ,'Rejected' , 'Approved'])->nullable()->default('Waiting');
            $table->integer('acreage');
            $table->date('checkout');
            $table->integer('guests');
            $table->string('rule');
            $table->foreignId('drriad_id')->nullable()->constrained('dr_riads');
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
