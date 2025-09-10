import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Animal {
    id: number;
    type: string;
    breed: string;
    enclosure: string;
    birth_date: string | null;
    weight: number | null;
    reproductive_status: string;
    health_status: string;
    notes: string | null;
    created_at: string;
    updated_at: string;
}

interface AnimalsIndexProps {
    animals: {
        data: Animal[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    [key: string]: unknown;
}

const getAnimalEmoji = (type: string) => {
    switch (type) {
        case 'domba': return '🐑';
        case 'ayam_petelur': return '🐔';
        case 'ikan': return '🐟';
        default: return '🐄';
    }
};

const getHealthBadgeVariant = (status: string) => {
    switch (status) {
        case 'healthy': return 'default';
        case 'sick': return 'destructive';
        case 'recovering': return 'secondary';
        case 'quarantine': return 'outline';
        default: return 'secondary';
    }
};

const getHealthStatusText = (status: string) => {
    switch (status) {
        case 'healthy': return 'Sehat';
        case 'sick': return 'Sakit';
        case 'recovering': return 'Pemulihan';
        case 'quarantine': return 'Karantina';
        default: return status;
    }
};

const getTypeText = (type: string) => {
    switch (type) {
        case 'domba': return 'Domba';
        case 'ayam_petelur': return 'Ayam Petelur';
        case 'ikan': return 'Ikan';
        default: return type;
    }
};

export default function AnimalsIndex({ animals }: AnimalsIndexProps) {
    return (
        <AppLayout>
            <Head title="Manajemen Hewan Ternak" />
            
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">🐄 Manajemen Hewan Ternak</h1>
                        <p className="text-gray-600 mt-1">
                            Kelola dan monitor semua hewan ternak Anda
                        </p>
                    </div>
                    <Button asChild>
                        <a href="/animals/create">Tambah Hewan Baru</a>
                    </Button>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">🐄</div>
                                <div>
                                    <div className="text-2xl font-bold">{animals.total}</div>
                                    <div className="text-sm text-gray-600">Total Hewan</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">🐑</div>
                                <div>
                                    <div className="text-2xl font-bold">
                                        {animals.data.filter(a => a.type === 'domba').length}
                                    </div>
                                    <div className="text-sm text-gray-600">Domba</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">🐔</div>
                                <div>
                                    <div className="text-2xl font-bold">
                                        {animals.data.filter(a => a.type === 'ayam_petelur').length}
                                    </div>
                                    <div className="text-sm text-gray-600">Ayam Petelur</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">🐟</div>
                                <div>
                                    <div className="text-2xl font-bold">
                                        {animals.data.filter(a => a.type === 'ikan').length}
                                    </div>
                                    <div className="text-sm text-gray-600">Ikan</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Animals Grid */}
                {animals.data.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {animals.data.map((animal) => (
                            <Card key={animal.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center">
                                            <span className="text-2xl mr-2">
                                                {getAnimalEmoji(animal.type)}
                                            </span>
                                            {getTypeText(animal.type)} #{animal.id}
                                        </CardTitle>
                                        <Badge variant={getHealthBadgeVariant(animal.health_status)}>
                                            {getHealthStatusText(animal.health_status)}
                                        </Badge>
                                    </div>
                                    <CardDescription>
                                        {animal.breed} • {animal.enclosure}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 mb-4">
                                        {animal.weight && (
                                            <div className="flex justify-between">
                                                <span className="text-sm text-gray-600">Berat:</span>
                                                <span className="text-sm font-medium">{animal.weight} kg</span>
                                            </div>
                                        )}
                                        {animal.birth_date && (
                                            <div className="flex justify-between">
                                                <span className="text-sm text-gray-600">Lahir:</span>
                                                <span className="text-sm font-medium">
                                                    {new Date(animal.birth_date).toLocaleDateString('id-ID')}
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Status Reproduksi:</span>
                                            <span className="text-sm font-medium capitalize">
                                                {animal.reproductive_status}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex space-x-2">
                                        <Button size="sm" variant="outline" asChild>
                                            <a href={`/animals/${animal.id}`}>Detail</a>
                                        </Button>
                                        <Button size="sm" variant="outline" asChild>
                                            <a href={`/animals/${animal.id}/edit`}>Edit</a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Card>
                        <CardContent className="text-center py-12">
                            <div className="text-6xl mb-4">🐄</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Belum ada hewan ternak
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Mulai tambahkan hewan ternak pertama Anda untuk memulai manajemen peternakan
                            </p>
                            <Button asChild>
                                <a href="/animals/create">Tambah Hewan Pertama</a>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}