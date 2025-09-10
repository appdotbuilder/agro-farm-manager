import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from '@inertiajs/react';
import { ArrowLeft, Calendar, MapPin, Edit, Droplets, Activity } from 'lucide-react';

interface HydroponicParameter {
    id: number;
    measurement_date: string;
    ph_level: number;
    ec_level: number;
    water_temperature: number;
    ambient_temperature: number;
    humidity: number;
    notes: string | null;
}

interface HydroponicMaintenance {
    id: number;
    maintenance_date: string;
    maintenance_type: string;
    description: string;
    cost: number | null;
    performed_by: string;
}

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
    parameters: HydroponicParameter[];
    maintenance_records: HydroponicMaintenance[];
}

interface Props {
    plant: HydroponicPlant;
    [key: string]: unknown;
}

export default function ShowHydroponicPlant({ plant }: Props) {
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

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(amount);
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Dashboard', href: '/dashboard' },
                { title: 'Manajemen Hidroponik', href: '/hydroponics' },
                { title: plant.plant_type, href: `/hydroponics/${plant.id}` },
            ]}
        >
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link href={route('hydroponics.index')}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft size={16} />
                        </Button>
                    </Link>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold text-gray-900">🌱 {plant.plant_type}</h1>
                            <Badge className={`${getStatusColor(plant.status)} border-0`}>
                                {getStatusText(plant.status)}
                            </Badge>
                        </div>
                        {plant.variety && (
                            <p className="text-gray-600">Varietas: {plant.variety}</p>
                        )}
                    </div>
                    <Link href={route('hydroponics.edit', plant.id)}>
                        <Button className="flex items-center gap-2">
                            <Edit size={16} />
                            Edit
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Plant Information */}
                    <div className="lg:col-span-2">
                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="text-green-600" size={20} />
                                    Informasi Tanaman
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Detail Penanaman</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm">
                                                <MapPin size={16} className="text-gray-500" />
                                                <span className="font-medium">Lokasi:</span>
                                                <span>{plant.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar size={16} className="text-gray-500" />
                                                <span className="font-medium">Tanggal Tanam:</span>
                                                <span>{new Date(plant.planting_date).toLocaleDateString('id-ID')}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar size={16} className="text-gray-500" />
                                                <span className="font-medium">Target Panen:</span>
                                                <span>{new Date(plant.expected_harvest_date).toLocaleDateString('id-ID')}</span>
                                            </div>
                                            {plant.actual_harvest_date && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Calendar size={16} className="text-green-500" />
                                                    <span className="font-medium">Dipanen pada:</span>
                                                    <span>{new Date(plant.actual_harvest_date).toLocaleDateString('id-ID')}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {plant.harvest_weight_kg && (
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Hasil Panen</h4>
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                                <div className="text-2xl font-bold text-green-700">
                                                    {plant.harvest_weight_kg} kg
                                                </div>
                                                <div className="text-sm text-green-600">Total hasil panen</div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {plant.notes && (
                                    <div className="mt-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Catatan</h4>
                                        <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{plant.notes}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Parameters History */}
                        {plant.parameters.length > 0 && (
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Activity className="text-blue-600" size={20} />
                                        Riwayat Parameter
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {plant.parameters.slice(0, 5).map((parameter) => (
                                            <div key={parameter.id} className="border border-gray-200 rounded-lg p-4">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {new Date(parameter.measurement_date).toLocaleDateString('id-ID')}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                                                    <div>
                                                        <div className="font-medium text-gray-600">pH</div>
                                                        <div className="text-gray-900">{parameter.ph_level}</div>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-600">EC</div>
                                                        <div className="text-gray-900">{parameter.ec_level}</div>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-600">Suhu Air</div>
                                                        <div className="text-gray-900">{parameter.water_temperature}°C</div>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-600">Suhu Udara</div>
                                                        <div className="text-gray-900">{parameter.ambient_temperature}°C</div>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-600">Kelembaban</div>
                                                        <div className="text-gray-900">{parameter.humidity}%</div>
                                                    </div>
                                                </div>
                                                {parameter.notes && (
                                                    <div className="mt-3 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                                        {parameter.notes}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Maintenance History Sidebar */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Droplets className="text-orange-600" size={20} />
                                    Riwayat Perawatan
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {plant.maintenance_records.length === 0 ? (
                                    <div className="text-center py-6 text-gray-500">
                                        <Droplets size={32} className="mx-auto mb-2 opacity-50" />
                                        <p className="text-sm">Belum ada catatan perawatan</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {plant.maintenance_records.slice(0, 10).map((maintenance) => (
                                            <div key={maintenance.id} className="border-l-2 border-orange-200 pl-4 pb-4">
                                                <div className="text-sm font-medium text-gray-900 mb-1">
                                                    {maintenance.maintenance_type}
                                                </div>
                                                <div className="text-xs text-gray-500 mb-2">
                                                    {new Date(maintenance.maintenance_date).toLocaleDateString('id-ID')}
                                                </div>
                                                <p className="text-sm text-gray-700 mb-2">
                                                    {maintenance.description}
                                                </p>
                                                <div className="flex justify-between items-center text-xs">
                                                    <span className="text-gray-500">
                                                        oleh {maintenance.performed_by}
                                                    </span>
                                                    {maintenance.cost && (
                                                        <span className="text-orange-600 font-medium">
                                                            {formatCurrency(maintenance.cost)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}