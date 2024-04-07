<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RiadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'localisation' => 'required',
            'categorie_id' => 'required' ,
            'description' => 'required',
            'image' => 'required',
            'image.*' => 'required',
            'prix' => 'required',
            'date' => "required",
            'acreage' => 'required',
            'checkout' => "required",
            'service_id' => 'required',
            'service_id.*' => 'required',
            'repa_id' => 'required',
            'repa_id.*' => 'required',
            'rooms' => 'required',
            'currency' => 'required',
            'guests' => 'required',
            'rule' => 'required'
        ];
    }
}
