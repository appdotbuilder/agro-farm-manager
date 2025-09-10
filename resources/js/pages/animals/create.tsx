import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';



export default function CreateAnimal() {
    const { data, setData, post, processing, errors } = useForm({
        type: '',
        breed: '',
        enclosure: '',
        birth_date: '',
        weight: '',
        reproductive_status: 'juvenile',
        health_status: 'healthy',
        notes: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/animals');
    };

    return (
        <AppLayout>
            <Head title="Tambah Hewan Ternak Baru" />
            
            <div className="container mx-auto px-4 py-6">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">🐄 Tambah Hewan Ternak Baru</h1>
                        <p className="text-gray-600 mt-1">
                            Daftarkan hewan ternak baru ke dalam sistem manajemen
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Hewan Ternak</CardTitle>
                            <CardDescription>
                                Lengkapi data hewan ternak dengan akurat untuk pengelolaan yang optimal
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="type">Jenis Hewan *</Label>
                                        <Select
                                            onValueChange={(value) => setData('type', value)}
                                            value={data.type}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih jenis hewan" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="domba">🐑 Domba</SelectItem>
                                                <SelectItem value="ayam_petelur">🐔 Ayam Petelur</SelectItem>
                                                <SelectItem value="ikan">🐟 Ikan</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.type && (
                                            <p className="text-sm text-red-600">{errors.type}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="breed">Ras/Jenis *</Label>
                                        <Input
                                            id="breed"
                                            type="text"
                                            value={data.breed}
                                            onChange={(e) => setData('breed', e.target.value)}
                                            placeholder="Contoh: Merino, Leghorn, Lele"
                                        />
                                        {errors.breed && (
                                            <p className="text-sm text-red-600">{errors.breed}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="enclosure">Kandang/Kolam *</Label>
                                        <Input
                                            id="enclosure"
                                            type="text"
                                            value={data.enclosure}
                                            onChange={(e) => setData('enclosure', e.target.value)}
                                            placeholder="Contoh: Kandang A, Kolam 1"
                                        />
                                        {errors.enclosure && (
                                            <p className="text-sm text-red-600">{errors.enclosure}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="birth_date">Tanggal Lahir</Label>
                                        <Input
                                            id="birth_date"
                                            type="date"
                                            value={data.birth_date}
                                            onChange={(e) => setData('birth_date', e.target.value)}
                                        />
                                        {errors.birth_date && (
                                            <p className="text-sm text-red-600">{errors.birth_date}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="weight">Berat Badan (kg)</Label>
                                        <Input
                                            id="weight"
                                            type="number"
                                            step="0.01"
                                            value={data.weight}
                                            onChange={(e) => setData('weight', e.target.value)}
                                            placeholder="0.00"
                                        />
                                        {errors.weight && (
                                            <p className="text-sm text-red-600">{errors.weight}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="reproductive_status">Status Reproduksi *</Label>
                                        <Select
                                            onValueChange={(value) => setData('reproductive_status', value)}
                                            value={data.reproductive_status}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="juvenile">Anakan</SelectItem>
                                                <SelectItem value="mature">Dewasa</SelectItem>
                                                <SelectItem value="breeding">Kawin</SelectItem>
                                                <SelectItem value="pregnant">Bunting/Bertelur</SelectItem>
                                                <SelectItem value="lactating">Menyusui</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.reproductive_status && (
                                            <p className="text-sm text-red-600">{errors.reproductive_status}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="health_status">Status Kesehatan *</Label>
                                        <Select
                                            onValueChange={(value) => setData('health_status', value)}
                                            value={data.health_status}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="healthy">✅ Sehat</SelectItem>
                                                <SelectItem value="sick">🤒 Sakit</SelectItem>
                                                <SelectItem value="recovering">🩹 Pemulihan</SelectItem>
                                                <SelectItem value="quarantine">🔒 Karantina</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.health_status && (
                                            <p className="text-sm text-red-600">{errors.health_status}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes">Catatan Tambahan</Label>
                                    <Textarea
                                        id="notes"
                                        value={data.notes}
                                        onChange={(e) => setData('notes', e.target.value)}
                                        placeholder="Catatan khusus tentang hewan ternak ini..."
                                        className="min-h-[100px]"
                                    />
                                    {errors.notes && (
                                        <p className="text-sm text-red-600">{errors.notes}</p>
                                    )}
                                </div>

                                <div className="flex justify-end space-x-4">
                                    <Button type="button" variant="outline" asChild>
                                        <a href="/animals">Batal</a>
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Menyimpan...' : 'Simpan Hewan'}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}