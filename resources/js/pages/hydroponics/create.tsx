import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Sprout, ArrowLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';



export default function CreateHydroponicPlant() {
    const { data, setData, post, processing, errors } = useForm({
        plant_type: '',
        variety: '',
        location: '',
        planting_date: '',
        expected_harvest_date: '',
        status: 'germinating',
        notes: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('hydroponics.store'), {
            preserveState: true,
        });
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Dashboard', href: '/dashboard' },
                { title: 'Manajemen Hidroponik', href: '/hydroponics' },
                { title: 'Tambah Tanaman', href: '/hydroponics/create' },
            ]}
        >
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link href={route('hydroponics.index')}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft size={16} />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">🌱 Tambah Tanaman Hidroponik</h1>
                        <p className="text-gray-600 mt-2">Daftarkan tanaman hidroponik baru untuk dikelola</p>
                    </div>
                </div>

                <div className="max-w-2xl">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sprout className="text-green-600" size={20} />
                                Informasi Tanaman
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="plant_type" className="text-sm font-medium">
                                            Jenis Tanaman *
                                        </Label>
                                        <Select
                                            value={data.plant_type}
                                            onValueChange={(value) => setData('plant_type', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih jenis tanaman" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="jagung">🌽 Jagung</SelectItem>
                                                <SelectItem value="sayuran_hijau">🥬 Sayuran Hijau</SelectItem>
                                                <SelectItem value="tomat">🍅 Tomat</SelectItem>
                                                <SelectItem value="cabai">🌶️ Cabai</SelectItem>
                                                <SelectItem value="selada">🥗 Selada</SelectItem>
                                                <SelectItem value="bayam">🍃 Bayam</SelectItem>
                                                <SelectItem value="kangkung">🌿 Kangkung</SelectItem>
                                                <SelectItem value="lainnya">🌱 Lainnya</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.plant_type} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="variety" className="text-sm font-medium">
                                            Varietas
                                        </Label>
                                        <Input
                                            id="variety"
                                            type="text"
                                            placeholder="Contoh: Hibrida F1, Pioneer, dll"
                                            value={data.variety}
                                            onChange={(e) => setData('variety', e.target.value)}
                                        />
                                        <InputError message={errors.variety} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="location" className="text-sm font-medium">
                                        Lokasi Penanaman *
                                    </Label>
                                    <Input
                                        id="location"
                                        type="text"
                                        placeholder="Contoh: Greenhouse A, Rak B-1, dll"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                    />
                                    <InputError message={errors.location} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="planting_date" className="text-sm font-medium">
                                            Tanggal Tanam *
                                        </Label>
                                        <Input
                                            id="planting_date"
                                            type="date"
                                            value={data.planting_date}
                                            onChange={(e) => setData('planting_date', e.target.value)}
                                        />
                                        <InputError message={errors.planting_date} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="expected_harvest_date" className="text-sm font-medium">
                                            Target Tanggal Panen *
                                        </Label>
                                        <Input
                                            id="expected_harvest_date"
                                            type="date"
                                            value={data.expected_harvest_date}
                                            onChange={(e) => setData('expected_harvest_date', e.target.value)}
                                        />
                                        <InputError message={errors.expected_harvest_date} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="status" className="text-sm font-medium">
                                        Status Tanaman
                                    </Label>
                                    <Select
                                        value={data.status}
                                        onValueChange={(value) => setData('status', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="germinating">🌱 Berkecambah</SelectItem>
                                            <SelectItem value="growing">🌿 Tumbuh</SelectItem>
                                            <SelectItem value="harvested">✅ Dipanen</SelectItem>
                                            <SelectItem value="failed">❌ Gagal</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.status} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes" className="text-sm font-medium">
                                        Catatan
                                    </Label>
                                    <Textarea
                                        id="notes"
                                        placeholder="Catatan tambahan tentang tanaman ini..."
                                        rows={4}
                                        value={data.notes}
                                        onChange={(e) => setData('notes', e.target.value)}
                                    />
                                    <InputError message={errors.notes} />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <Button type="submit" disabled={processing} className="flex-1">
                                        {processing ? 'Menyimpan...' : 'Simpan Tanaman'}
                                    </Button>
                                    <Link href={route('hydroponics.index')}>
                                        <Button type="button" variant="outline">
                                            Batal
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}