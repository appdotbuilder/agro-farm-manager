<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAnimalRequest;
use App\Http\Requests\UpdateAnimalRequest;
use App\Models\Animal;
use Inertia\Inertia;

class AnimalController extends Controller
{
    /**
     * Display a listing of the animals.
     */
    public function index()
    {
        $animals = Animal::with(['healthRecords', 'feedingSchedules'])
            ->latest()
            ->paginate(20);

        return Inertia::render('animals/index', [
            'animals' => $animals
        ]);
    }

    /**
     * Show the form for creating a new animal.
     */
    public function create()
    {
        return Inertia::render('animals/create');
    }

    /**
     * Store a newly created animal in storage.
     */
    public function store(StoreAnimalRequest $request)
    {
        $animal = Animal::create($request->validated());

        return redirect()->route('animals.show', $animal)
            ->with('success', 'Hewan ternak berhasil ditambahkan.');
    }

    /**
     * Display the specified animal.
     */
    public function show(Animal $animal)
    {
        $animal->load([
            'healthRecords' => function ($query) {
                $query->latest('record_date');
            },
            'feedingSchedules' => function ($query) {
                $query->latest('feeding_date');
            },
            'transactions' => function ($query) {
                $query->latest('transaction_date');
            }
        ]);

        return Inertia::render('animals/show', [
            'animal' => $animal
        ]);
    }

    /**
     * Show the form for editing the specified animal.
     */
    public function edit(Animal $animal)
    {
        return Inertia::render('animals/edit', [
            'animal' => $animal
        ]);
    }

    /**
     * Update the specified animal in storage.
     */
    public function update(UpdateAnimalRequest $request, Animal $animal)
    {
        $animal->update($request->validated());

        return redirect()->route('animals.show', $animal)
            ->with('success', 'Data hewan ternak berhasil diperbarui.');
    }

    /**
     * Remove the specified animal from storage.
     */
    public function destroy(Animal $animal)
    {
        $animal->delete();

        return redirect()->route('animals.index')
            ->with('success', 'Hewan ternak berhasil dihapus.');
    }
}