import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, router } from '@inertiajs/react';
import { Plus, Droplets, Calendar, MapPin, Trash2 } from 'lucide-react';

interface HydroponicPlant {
    id: number;
    plant_type: string;
    variety: string | null;
    location: string;
    planting_date: string;
    expected_harvest_date: string;
    actual_harvest_date: string | null;
    harvest_weight_kg: number | null;
    status: string;
    notes: string | null;
    created_at: string;
    updated_at: string;
}

interface PaginationData {
    data: HydroponicPlant[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    plants: PaginationData;
    [key: string]: unknown;
}

export default function HydroponicsIndex({ plants }: Props) {
    const handleDelete = (plantId: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus tanaman hidroponik ini?')) {
            router.delete(route('hydroponics.destroy', plantId), {
                preserveState: true,
            });
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'growing':
                return 'bg-green-100 text-green-800';
            case 'harvested':
                return 'bg-blue-100 text-blue-800';
            case 'germinating':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'growing':
                return 'Tumbuh';
            case 'harvested':
                return 'Dipanen';
            case 'germinating':
                return 'Berkecambah';
            case 'failed':
                return 'Gagal';
            default:
                return status;
        }
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Dashboard', href: '/dashboard' },
                { title: 'Manajemen Hidroponik', href: '/hydroponics' },
            ]}
        >
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">🌱 Manajemen Hidroponik</h1>
                        <p className="text-gray-600 mt-2">Kelola tanaman hidroponik dan pantau pertumbuhannya</p>
                    </div>
                    <Link href={route('hydroponics.create')}>
                        <Button className="flex items-center gap-2">
                            <Plus size={16} />
                            Tambah Tanaman
                        </Button>
                    </Link>
                </div>

                {plants.data.length === 0 ? (
                    <Card className="text-center py-12">
                        <CardContent>
                            <Droplets size={48} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada Tanaman Hidroponik</h3>
                            <p className="text-gray-600 mb-6">
                                Mulai kelola perkebunan hidroponik Anda dengan menambahkan tanaman pertama.
                            </p>
                            <Link href={route('hydroponics.create')}>
                                <Button>
                                    <Plus size={16} className="mr-2" />
                                    Tambah Tanaman Pertama
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            {plants.data.map((plant) => (
                                <Card key={plant.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader className="pb-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="text-lg font-semibold">
                                                    {plant.plant_type}
                                                </CardTitle>
                                                {plant.variety && (
                                                    <p className="text-sm text-gray-600">Varietas: {plant.variety}</p>
                                                )}
                                            </div>
                                            <Badge className={`${getStatusColor(plant.status)} border-0`}>
                                                {getStatusText(plant.status)}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <MapPin size={16} />
                                                <span>Lokasi: {plant.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Calendar size={16} />
                                                <span>
                                                    Tanam: {new Date(plant.planting_date).toLocaleDateString('id-ID')}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Calendar size={16} />
                                                <span>
                                                    Target Panen: {new Date(plant.expected_harvest_date).toLocaleDateString('id-ID')}
                                                </span>
                                            </div>
                                            {plant.harvest_weight_kg && (
                                                <div className="text-sm text-green-600 font-semibold">
                                                    📊 Hasil Panen: {plant.harvest_weight_kg} kg
                                                </div>
                                            )}
                                            {plant.notes && (
                                                <p className="text-sm text-gray-500 line-clamp-2">{plant.notes}</p>
                                            )}
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            <Link 
                                                href={route('hydroponics.show', plant.id)}
                                                className="flex-1"
                                            >
                                                <Button variant="outline" size="sm" className="w-full">
                                                    Lihat Detail
                                                </Button>
                                            </Link>
                                            <Link href={route('hydroponics.edit', plant.id)}>
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleDelete(plant.id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={14} />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        {plants.last_page > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-6">
                                <div className="text-sm text-gray-600">
                                    Menampilkan {plants.data.length} dari {plants.total} tanaman
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AppLayout>
    );
}