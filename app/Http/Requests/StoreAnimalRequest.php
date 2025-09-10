<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAnimalRequest extends FormRequest
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
            'type' => 'required|in:domba,ayam_petelur,ikan',
            'breed' => 'required|string|max:255',
            'enclosure' => 'required|string|max:255',
            'birth_date' => 'nullable|date|before_or_equal:today',
            'weight' => 'nullable|numeric|min:0|max:9999.99',
            'reproductive_status' => 'required|in:breeding,pregnant,lactating,juvenile,mature',
            'health_status' => 'required|in:healthy,sick,recovering,quarantine',
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
            'type.required' => 'Jenis hewan ternak wajib dipilih.',
            'type.in' => 'Jenis hewan ternak tidak valid.',
            'breed.required' => 'Ras hewan ternak wajib diisi.',
            'enclosure.required' => 'Kandang/kolam wajib diisi.',
            'birth_date.date' => 'Format tanggal lahir tidak valid.',
            'birth_date.before_or_equal' => 'Tanggal lahir tidak boleh di masa depan.',
            'weight.numeric' => 'Berat badan harus berupa angka.',
            'weight.min' => 'Berat badan tidak boleh kurang dari 0.',
            'reproductive_status.required' => 'Status reproduksi wajib dipilih.',
            'health_status.required' => 'Status kesehatan wajib dipilih.',
        ];
    }
}