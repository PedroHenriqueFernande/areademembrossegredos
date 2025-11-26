import { ArrowLeft, FileText, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface PDFResource {
    id: number;
    title: string;
    pdfUrl: string;
}

interface BonusModuleProps {
    onBack: () => void;
}

const bonusResources: PDFResource[] = [
    {
        id: 1,
        title: 'Guia Mental do Domínio, Foco e Autoridade Masculina',
        pdfUrl: 'https://drive.google.com/file/d/1cnrHI2sOm2umJnWGMOKFTmGCSXZNz1xC/preview'
    },
    {
        id: 2,
        title: 'Dominancia Silenciosa',
        pdfUrl: 'https://drive.google.com/file/d/1NzyaWr8wX4UrJ0fwB4hccRUpeL-PfG3m/preview'
    },
    {
        id: 3,
        title: 'Comunicação de Alto Impacto',
        pdfUrl: 'https://drive.google.com/file/d/1wx_gV92H4eB15vPuQ7NqBpuoIYBRM_ES/preview'
    },
    {
        id: 4,
        title: 'Código da Confiança Masculina',
        pdfUrl: 'https://drive.google.com/file/d/15rMDGLTB9VrIYz4zJtTLR1SLqPbKJ3yn/preview'
    },
    {
        id: 5,
        title: 'Arquétipo do Macho Alfa',
        pdfUrl: 'https://drive.google.com/file/d/11L6C2gLXpKo38XP_LcJRaGdmThBXMJlN/preview'
    }
];

export function BonusModule({ onBack }: BonusModuleProps) {
    const [selectedPDF, setSelectedPDF] = useState<PDFResource | null>(null);

    if (selectedPDF) {
        return (
            <div className="fixed inset-0 bg-black z-50 flex flex-col">
                <div className="bg-black/90 backdrop-blur-xl border-b border-[#D4AF37]/20 p-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <button
                            onClick={() => setSelectedPDF(null)}
                            className="flex items-center gap-2 px-4 py-2 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white hover:border-[#D4AF37] transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Voltar
                        </button>
                        <h2 className="text-xl font-bold text-[#D4AF37]">{selectedPDF.title}</h2>
                        <div className="w-24"></div>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <iframe
                        src={selectedPDF.pdfUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay"
                    ></iframe>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0D0D0D] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0D0D0D] to-[#0D0D0D]"></div>

            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#8C1D39] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <header className="bg-black/40 backdrop-blur-xl border-b border-[#D4AF37]/20">
                    <div className="max-w-7xl mx-auto px-8 py-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <button
                                    onClick={onBack}
                                    className="flex items-center gap-2 px-4 py-2 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white hover:border-[#D4AF37] transition-all duration-300 mb-4"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Voltar ao Dashboard
                                </button>
                                <h1 className="text-3xl font-bold text-[#D4AF37]" style={{ textShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}>
                                    O Segredo Dos Pornstars - Bônus
                                </h1>
                                <p className="text-gray-400 mt-2">Materiais exclusivos para complementar seu aprendizado</p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bonusResources.map((resource) => (
                            <div
                                key={resource.id}
                                onClick={() => setSelectedPDF(resource)}
                                className="group relative bg-gradient-to-br from-[#8C1D39] to-[#6B1529] border-2 border-[#D4AF37] rounded-xl p-6 cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/20 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/30 transition-all duration-300"></div>

                                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-16 h-16 bg-black/40 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-300">
                                            <FileText className="w-8 h-8 text-[#D4AF37]" />
                                        </div>
                                        <Maximize2 className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-2">Clique para visualizar em tela cheia</p>
                                </div>

                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{ boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
