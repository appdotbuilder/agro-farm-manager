<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateHydroponicPlantRequest extends FormRequest
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
            'plant_type' => 'required|string|max:255',
            'variety' => 'nullable|string|max:255',
            'location' => 'required|string|max:255',
            'planting_date' => 'required|date',
            'expected_harvest_date' => 'required|date|after:planting_date',
            'actual_harvest_date' => 'nullable|date',
            'harvest_weight_kg' => 'nullable|numeric|min:0|max:9999.99',
            'status' => 'required|in:germinating,growing,harvested,failed',
            'notes' => 'nullable|string',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'plant_type.required' => 'Jenis tanaman wajib diisi.',
            'location.required' => 'Lokasi tanam wajib diisi.',
            'planting_date.required' => 'Tanggal tanam wajib diisi.',
            'planting_date.date' => 'Format tanggal tanam tidak valid.',
            'expected_harvest_date.required' => 'Perkiraan tanggal panen wajib diisi.',
            'expected_harvest_date.date' => 'Format tanggal panen tidak valid.',
            'expected_harvest_date.after' => 'Tanggal panen harus setelah tanggal tanam.',
            'harvest_weight_kg.numeric' => 'Berat panen harus berupa angka.',
            'harvest_weight_kg.min' => 'Berat panen tidak boleh kurang dari 0.',
            'status.required' => 'Status tanaman wajib dipilih.',
            'status.in' => 'Status tanaman tidak valid.',
        ];
    }
}