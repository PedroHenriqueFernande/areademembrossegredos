import { ArrowLeft } from 'lucide-react';

interface IndividualBonusModuleProps {
    title: string;
    pdfUrl: string;
    onBack: () => void;
}

export function IndividualBonusModule({ title, pdfUrl, onBack }: IndividualBonusModuleProps) {
    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
            <div className="bg-black/90 backdrop-blur-xl border-b border-[#D4AF37]/20 p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 px-4 py-2 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white hover:border-[#D4AF37] transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar
                    </button>
                    <h2 className="text-xl font-bold text-[#D4AF37]">{title}</h2>
                    <div className="w-24"></div>
                </div>
            </div>
            <div className="flex-1 relative iframe-container">
                <iframe
                    src={pdfUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay"
                ></iframe>
            </div>
        </div>
    );
}
