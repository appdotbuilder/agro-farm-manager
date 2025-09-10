<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHydroponicPlantRequest;
use App\Http\Requests\UpdateHydroponicPlantRequest;
use App\Models\HydroponicPlant;
use Inertia\Inertia;

class HydroponicPlantController extends Controller
{
    /**
     * Display a listing of the hydroponic plants.
     */
    public function index()
    {
        $plants = HydroponicPlant::with(['parameters', 'maintenanceRecords'])
            ->latest()
            ->paginate(20);

        return Inertia::render('hydroponics/index', [
            'plants' => $plants
        ]);
    }

    /**
     * Show the form for creating a new hydroponic plant.
     */
    public function create()
    {
        return Inertia::render('hydroponics/create');
    }

    /**
     * Store a newly created hydroponic plant in storage.
     */
    public function store(StoreHydroponicPlantRequest $request)
    {
        $plant = HydroponicPlant::create($request->validated());

        return redirect()->route('hydroponics.show', $plant)
            ->with('success', 'Tanaman hidroponik berhasil ditambahkan.');
    }

    /**
     * Display the specified hydroponic plant.
     */
    public function show(HydroponicPlant $hydroponic)
    {
        $hydroponic->load([
            'parameters' => function ($query) {
                $query->latest('measurement_date');
            },
            'maintenanceRecords' => function ($query) {
                $query->latest('maintenance_date');
            }
        ]);

        return Inertia::render('hydroponics/show', [
            'plant' => $hydroponic
        ]);
    }

    /**
     * Show the form for editing the specified hydroponic plant.
     */
    public function edit(HydroponicPlant $hydroponic)
    {
        return Inertia::render('hydroponics/edit', [
            'plant' => $hydroponic
        ]);
    }

    /**
     * Update the specified hydroponic plant in storage.
     */
    public function update(UpdateHydroponicPlantRequest $request, HydroponicPlant $hydroponic)
    {
        $hydroponic->update($request->validated());

        return redirect()->route('hydroponics.show', $hydroponic)
            ->with('success', 'Data tanaman hidroponik berhasil diperbarui.');
    }

    /**
     * Remove the specified hydroponic plant from storage.
     */
    public function destroy(HydroponicPlant $hydroponic)
    {
        $hydroponic->delete();

        return redirect()->route('hydroponics.index')
            ->with('success', 'Tanaman hidroponik berhasil dihapus.');
    }
}