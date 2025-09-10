<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInventoryItemRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'category' => 'required|in:feed,medicine,seeds,nutrients,equipment',
            'unit' => 'required|string|max:50',
            'current_stock' => 'required|numeric|min:0',
            'minimum_stock' => 'required|numeric|min:0',
            'unit_cost' => 'required|numeric|min:0',
            'supplier' => 'nullable|string|max:255',
            'last_purchase_date' => 'nullable|date',
            'expiry_date' => 'nullable|date|after:today',
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
            'name.required' => 'Nama item wajib diisi.',
            'category.required' => 'Kategori item wajib dipilih.',
            'category.in' => 'Kategori item tidak valid.',
            'unit.required' => 'Satuan item wajib diisi.',
            'current_stock.required' => 'Stok saat ini wajib diisi.',
            'current_stock.numeric' => 'Stok saat ini harus berupa angka.',
            'current_stock.min' => 'Stok saat ini tidak boleh kurang dari 0.',
            'minimum_stock.required' => 'Stok minimum wajib diisi.',
            'minimum_stock.numeric' => 'Stok minimum harus berupa angka.',
            'minimum_stock.min' => 'Stok minimum tidak boleh kurang dari 0.',
            'unit_cost.required' => 'Harga per unit wajib diisi.',
            'unit_cost.numeric' => 'Harga per unit harus berupa angka.',
            'unit_cost.min' => 'Harga per unit tidak boleh kurang dari 0.',
            'expiry_date.after' => 'Tanggal kedaluwarsa harus di masa depan.',
        ];
    }
}