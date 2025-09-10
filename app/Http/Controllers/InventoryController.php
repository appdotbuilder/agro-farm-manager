<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInventoryItemRequest;
use App\Http\Requests\UpdateInventoryItemRequest;
use App\Models\InventoryItem;
use Inertia\Inertia;

class InventoryController extends Controller
{
    /**
     * Display a listing of the inventory items.
     */
    public function index()
    {
        $items = InventoryItem::latest()
            ->paginate(20);

        return Inertia::render('inventory/index', [
            'items' => $items
        ]);
    }

    /**
     * Show the form for creating a new inventory item.
     */
    public function create()
    {
        return Inertia::render('inventory/create');
    }

    /**
     * Store a newly created inventory item in storage.
     */
    public function store(StoreInventoryItemRequest $request)
    {
        $item = InventoryItem::create($request->validated());

        return redirect()->route('inventory.show', $item)
            ->with('success', 'Item inventaris berhasil ditambahkan.');
    }

    /**
     * Display the specified inventory item.
     */
    public function show(InventoryItem $inventory)
    {
        return Inertia::render('inventory/show', [
            'item' => $inventory
        ]);
    }

    /**
     * Show the form for editing the specified inventory item.
     */
    public function edit(InventoryItem $inventory)
    {
        return Inertia::render('inventory/edit', [
            'item' => $inventory
        ]);
    }

    /**
     * Update the specified inventory item in storage.
     */
    public function update(UpdateInventoryItemRequest $request, InventoryItem $inventory)
    {
        $inventory->update($request->validated());

        return redirect()->route('inventory.show', $inventory)
            ->with('success', 'Data inventaris berhasil diperbarui.');
    }

    /**
     * Remove the specified inventory item from storage.
     */
    public function destroy(InventoryItem $inventory)
    {
        $inventory->delete();

        return redirect()->route('inventory.index')
            ->with('success', 'Item inventaris berhasil dihapus.');
    }
}