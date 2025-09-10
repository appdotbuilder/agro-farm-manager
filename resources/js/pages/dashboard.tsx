import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Transaction {
    id: number;
    type: string;
    buyer_seller: string;
    quantity: number;
    total_amount: number;
    transaction_date: string;
    animal?: {
        id: number;
        type: string;
    };
}

interface HydroponicPlant {
    id: number;
    plant_type: string;
    location: string;
    expected_harvest_date: string;
    status: string;
}

interface InventoryItem {
    id: number;
    name: string;
    current_stock: number;
    minimum_stock: number;
}

interface DashboardProps {
    stats?: {
        total_animals: number;
        healthy_animals: number;
        active_plants: number;
        total_plants: number;
        low_stock_items: number;
        total_inventory_items: number;
        monthly_sales: number;
        monthly_purchases: number;
    };
    recentTransactions?: Transaction[];
    upcomingHarvests?: HydroponicPlant[];
    lowStockItems?: InventoryItem[];
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ 
    stats = {
        total_animals: 0,
        healthy_animals: 0,
        active_plants: 0,
        total_plants: 0,
        low_stock_items: 0,
        total_inventory_items: 0,
        monthly_sales: 0,
        monthly_purchases: 0
    },
    recentTransactions = [],
    upcomingHarvests = [],
}: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - Farm Manager" />
            
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6">
                    <h1 className="text-2xl font-bold mb-2">🌾 Selamat Datang di Farm Manager!</h1>
                    <p className="text-green-100">
                        Kelola bisnis pertanian Anda dengan mudah. Pantau hewan ternak, tanaman hidroponik, dan inventaris dalam satu dashboard.
                    </p>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-blue-700">Total Hewan Ternak</CardTitle>
                            <div className="text-2xl">🐄</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-900">{stats.total_animals}</div>
                            <p className="text-xs text-blue-600">
                                {stats.healthy_animals} sehat ({Math.round((stats.healthy_animals / Math.max(stats.total_animals, 1)) * 100)}%)
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-green-700">Tanaman Hidroponik</CardTitle>
                            <div className="text-2xl">🌱</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-900">{stats.total_plants}</div>
                            <p className="text-xs text-green-600">
                                {stats.active_plants} sedang tumbuh
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-orange-700">Inventaris</CardTitle>
                            <div className="text-2xl">📦</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-900">{stats.total_inventory_items}</div>
                            <p className="text-xs text-orange-600">
                                {stats.low_stock_items} stok menipis
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-purple-700">Penjualan Bulan Ini</CardTitle>
                            <div className="text-2xl">💰</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-900">
                                Rp {stats.monthly_sales.toLocaleString('id-ID')}
                            </div>
                            <p className="text-xs text-purple-600">
                                Pembelian: Rp {stats.monthly_purchases.toLocaleString('id-ID')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">🐑 Manajemen Hewan Ternak</CardTitle>
                            <CardDescription>
                                Kelola domba, ayam petelur, dan ikan Anda
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button className="w-full" variant="outline" asChild>
                                <a href="/animals">Lihat Semua Hewan</a>
                            </Button>
                            <Button className="w-full" asChild>
                                <a href="/animals/create">Tambah Hewan Baru</a>
                            </Button>
                            <div className="text-sm text-gray-600 mt-2">
                                Fitur: Pencatatan kesehatan, jadwal pakan, HPP
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">🌾 Hidroponik Fodder</CardTitle>
                            <CardDescription>
                                Monitor tanaman fodder jagung Anda
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button className="w-full" variant="outline" asChild>
                                <a href="/hydroponics">Lihat Tanaman</a>
                            </Button>
                            <Button className="w-full" asChild>
                                <a href="/hydroponics/create">Tanam Baru</a>
                            </Button>
                            <div className="text-sm text-gray-600 mt-2">
                                Fitur: Monitor PPM, pH, suhu, jadwal panen
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">📦 Inventaris</CardTitle>
                            <CardDescription>
                                Kelola stok pakan, obat, dan perlengkapan
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button className="w-full" variant="outline" asChild>
                                <a href="/inventory">Lihat Inventaris</a>
                            </Button>
                            <Button className="w-full" asChild>
                                <a href="/inventory/create">Tambah Item</a>
                            </Button>
                            <div className="text-sm text-gray-600 mt-2">
                                Fitur: Alert stok minimum, tracking kedaluwarsa
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity & Alerts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>📈 Aktivitas Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {recentTransactions.length > 0 ? (
                                <div className="space-y-3">
                                    {recentTransactions.map((transaction) => (
                                        <div key={transaction.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                            <div>
                                                <div className="font-medium">
                                                    {transaction.type === 'sale' ? '💰 Penjualan' : '🛒 Pembelian'}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {transaction.buyer_seller} • {transaction.quantity} ekor
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-semibold">
                                                    Rp {transaction.total_amount.toLocaleString('id-ID')}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {new Date(transaction.transaction_date).toLocaleDateString('id-ID')}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <div className="text-4xl mb-2">📊</div>
                                    <p>Belum ada transaksi</p>
                                    <Button className="mt-4" asChild>
                                        <a href="/animals">Mulai Kelola Hewan</a>
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>⚠️ Perhatian & Reminder</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {stats.low_stock_items > 0 && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                        <div className="flex items-center">
                                            <span className="text-red-500 mr-2">🚨</span>
                                            <div>
                                                <div className="font-medium text-red-800">Stok Menipis</div>
                                                <div className="text-sm text-red-600">
                                                    {stats.low_stock_items} item perlu diisi ulang
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {upcomingHarvests.length > 0 && (
                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center">
                                            <span className="text-green-500 mr-2">🌾</span>
                                            <div>
                                                <div className="font-medium text-green-800">Panen Mendekati</div>
                                                <div className="text-sm text-green-600">
                                                    {upcomingHarvests.length} tanaman siap panen
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {stats.low_stock_items === 0 && upcomingHarvests.length === 0 && (
                                    <div className="text-center py-8 text-gray-500">
                                        <div className="text-4xl mb-2">✅</div>
                                        <p>Semua berjalan lancar!</p>
                                        <p className="text-sm">Tidak ada peringatan saat ini</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Getting Started Guide */}
                <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
                    <CardHeader>
                        <CardTitle className="text-indigo-900">🚀 Panduan Memulai</CardTitle>
                        <CardDescription className="text-indigo-700">
                            Ikuti langkah-langkah berikut untuk memaksimalkan Farm Manager
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center p-4">
                                <div className="text-3xl mb-2">1️⃣</div>
                                <h4 className="font-semibold text-indigo-900 mb-1">Tambah Hewan Ternak</h4>
                                <p className="text-sm text-indigo-700 mb-3">
                                    Daftarkan domba, ayam, atau ikan Anda
                                </p>
                                <Button size="sm" asChild>
                                    <a href="/animals/create">Tambah Hewan</a>
                                </Button>
                            </div>
                            
                            <div className="text-center p-4">
                                <div className="text-3xl mb-2">2️⃣</div>
                                <h4 className="font-semibold text-indigo-900 mb-1">Setup Hidroponik</h4>
                                <p className="text-sm text-indigo-700 mb-3">
                                    Mulai tanaman fodder jagung Anda
                                </p>
                                <Button size="sm" asChild>
                                    <a href="/hydroponics/create">Mulai Tanam</a>
                                </Button>
                            </div>
                            
                            <div className="text-center p-4">
                                <div className="text-3xl mb-2">3️⃣</div>
                                <h4 className="font-semibold text-indigo-900 mb-1">Kelola Inventaris</h4>
                                <p className="text-sm text-indigo-700 mb-3">
                                    Catat stok pakan dan perlengkapan
                                </p>
                                <Button size="sm" asChild>
                                    <a href="/inventory/create">Tambah Item</a>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}