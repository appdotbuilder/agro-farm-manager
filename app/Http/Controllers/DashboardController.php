<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use App\Models\HydroponicPlant;
use App\Models\InventoryItem;
use App\Models\Transaction;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the farm management dashboard.
     */
    public function index()
    {
        // Get dashboard statistics
        $stats = [
            'total_animals' => Animal::count(),
            'healthy_animals' => Animal::where('health_status', 'healthy')->count(),
            'active_plants' => HydroponicPlant::where('status', 'growing')->count(),
            'total_plants' => HydroponicPlant::count(),
            'low_stock_items' => InventoryItem::lowStock()->count(),
            'total_inventory_items' => InventoryItem::count(),
            'monthly_sales' => Transaction::where('type', 'sale')
                ->whereMonth('transaction_date', now()->month)
                ->sum('total_amount'),
            'monthly_purchases' => Transaction::where('type', 'purchase')
                ->whereMonth('transaction_date', now()->month)
                ->sum('total_amount'),
        ];

        // Get recent activities
        $recentTransactions = Transaction::with('animal')
            ->latest()
            ->take(5)
            ->get();

        $upcomingHarvests = HydroponicPlant::where('status', 'growing')
            ->where('expected_harvest_date', '>=', now())
            ->orderBy('expected_harvest_date')
            ->take(5)
            ->get();

        $lowStockItems = InventoryItem::lowStock()
            ->take(5)
            ->get();

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'recentTransactions' => $recentTransactions,
            'upcomingHarvests' => $upcomingHarvests,
            'lowStockItems' => $lowStockItems,
        ]);
    }
}