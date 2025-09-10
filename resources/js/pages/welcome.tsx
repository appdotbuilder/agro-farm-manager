import React from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <>
            <Head title="Farm Management System" />
            
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
                {/* Header */}
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-green-600 text-white p-2 rounded-lg">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">🐄 Farm Manager</h1>
                                    <p className="text-sm text-gray-600">Sistem Manajemen Peternakan & Hidroponik</p>
                                </div>
                            </div>
                            
                            <div className="flex space-x-4">
                                <Button variant="outline" asChild>
                                    <a href="/login">Masuk</a>
                                </Button>
                                <Button asChild>
                                    <a href="/register">Daftar Sekarang</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">
                            🌱 Kelola Bisnis Pertanian Anda <br />
                            <span className="text-green-600">dengan Mudah & Efisien</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Sistem manajemen terintegrasi untuk pengelolaan hewan ternak (domba, ayam petelur, ikan) 
                            dan perkebunan hidroponik fodder jagung. Kelola dengan cerdas, raih keuntungan maksimal!
                        </p>
                        
                        <div className="flex justify-center space-x-4">
                            <Button size="lg" asChild>
                                <a href="/register">🚀 Mulai Gratis</a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="/dashboard">📊 Lihat Demo</a>
                            </Button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Livestock Management */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🐑</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Manajemen Hewan Ternak</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Pencatatan detail domba, ayam petelur & ikan</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Monitoring kesehatan & reproduksi</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Jadwal pakan otomatis</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Perhitungan HPP akurat</li>
                            </ul>
                        </div>

                        {/* Hydroponic Management */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🌾</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Hidroponik Fodder Jagung</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Monitoring parameter nutrisi PPM</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Kontrol pH & suhu air</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Jadwal tanam & panen</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Catatan perawatan lengkap</li>
                            </ul>
                        </div>

                        {/* Inventory Management */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">📦</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Manajemen Inventaris</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Stok pakan & obat-obatan</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Bibit & nutrisi hidroponik</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Alert stok minimum</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Tracking tanggal kedaluwarsa</li>
                            </ul>
                        </div>

                        {/* Financial Tracking */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analisis Keuangan</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Perhitungan biaya produksi</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Transaksi jual beli</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Laporan laba rugi</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>ROI per hewan/tanaman</li>
                            </ul>
                        </div>

                        {/* Health Monitoring */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🏥</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring Kesehatan</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Catatan vaksinasi lengkap</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Riwayat pengobatan</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Reminder check-up</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Status karantina</li>
                            </ul>
                        </div>

                        {/* Reporting & Analytics */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Laporan & Analitik</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Dashboard real-time</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Grafik pertumbuhan</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Prediksi hasil panen</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Export data Excel/PDF</li>
                            </ul>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="bg-green-600 text-white rounded-2xl p-12 mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold mb-4">Mengapa Memilih Farm Manager?</h3>
                            <p className="text-xl text-green-100">Trusted by Indonesian farmers & entrepreneurs</p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold mb-2">500+</div>
                                <div className="text-green-100">Peternak Aktif</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">50K+</div>
                                <div className="text-green-100">Hewan Ternak</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">95%</div>
                                <div className="text-green-100">Tingkat Kepuasan</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">2.5x</div>
                                <div className="text-green-100">Peningkatan Profit</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-white rounded-2xl shadow-xl p-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            🎯 Siap Meningkatkan Bisnis Pertanian Anda?
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Bergabunglah dengan ribuan peternak sukses yang telah mempercayai sistem kami. 
                            Mulai gratis hari ini, rasakan perbedaannya!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Button size="lg" className="text-lg px-8 py-4" asChild>
                                <a href="/register">🚀 Daftar Gratis Sekarang</a>
                            </Button>
                            <div className="text-sm text-gray-500">
                                ⚡ Setup 5 menit • 💳 Tidak perlu kartu kredit • 🔒 100% aman
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="flex justify-center items-center space-x-4 mb-4">
                                <div className="bg-green-600 p-2 rounded-lg">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-xl font-semibold">Farm Manager</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Platform manajemen pertanian terpercaya untuk kemajuan agribisnis Indonesia
                            </p>
                            <div className="text-sm text-gray-500">
                                © 2024 Farm Manager. Semua hak dilindungi. Made with ❤️ for Indonesian farmers.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}