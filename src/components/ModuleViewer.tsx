import { ArrowLeft, PlayCircle } from 'lucide-react';

interface Lesson {
    id: number;
    title: string;
    videoUrl: string;
}

interface ModuleViewerProps {
    moduleId: number;
    moduleTitle: string;
    onBack: () => void;
}

const moduleLessons: Record<number, Lesson[]> = {
    1: [
        {
            id: 1,
            title: 'Nós Iremos Te Ensinar Como Foder de Verdade',
            videoUrl: 'https://drive.google.com/file/d/1PJNyh2Ko4uE8F2q4mG8ugXoq-C78lnt-/preview'
        },
        {
            id: 2,
            title: 'Como Será',
            videoUrl: 'https://drive.google.com/file/d/1g38zbnAzmdjM7BZg6KiWhKOcEFYvTywe/preview'
        },
        {
            id: 3,
            title: 'Demonstrando um Pouco Do que Verá Na Aula',
            videoUrl: 'https://drive.google.com/file/d/1PnQxTiCnnu9JqhoQS1DmNnH8m7Aoz52f/preview'
        }
    ],
    2: [
        {
            id: 1,
            title: 'Aula 1',
            videoUrl: 'https://drive.google.com/file/d/1j40TKBqTdURiqLWu5oTVnD4F6hVytcOO/preview'
        },
        {
            id: 2,
            title: 'Aula 2',
            videoUrl: 'https://drive.google.com/file/d/1j40TKBqTdURiqLWu5oTVnD4F6hVytcOO/preview'
        },
        {
            id: 3,
            title: 'Aula 3',
            videoUrl: 'https://drive.google.com/file/d/1ILe6BQOhr_wW9bCyXiFdEIo4nwe-7t3E/preview'
        },
        {
            id: 4,
            title: 'Aula 4',
            videoUrl: 'https://drive.google.com/file/d/12CX7Cne3KGaWFSDG8liHc6Sxmf1IJ8YM/preview'
        },
        {
            id: 5,
            title: 'Aula 5',
            videoUrl: 'https://drive.google.com/file/d/1xhotA6ra3EX17rYOND4vdOvESYaQvcUQ/preview'
        }
    ],
    3: [
        {
            id: 1,
            title: 'Entenda sobre tensão sexual',
            videoUrl: 'https://drive.google.com/file/d/1TugODQHqhtd4-WjgYTr3wuW1sT2NYiTW/preview'
        },
        {
            id: 2,
            title: 'Entenda mais sobre sexo',
            videoUrl: 'https://drive.google.com/file/d/1l2t54jgM11MS6W4etvUknpoBusEj8rxP/preview'
        },
        {
            id: 3,
            title: 'Mostrando novamente na prática',
            videoUrl: 'https://drive.google.com/file/d/17FiEerL2QcHzO40wiHT-hHa7YE5DSYDp/preview'
        },
        {
            id: 4,
            title: 'Mostrando na prática 2',
            videoUrl: 'https://drive.google.com/file/d/1_5Qx19IUqhutPpYsUJmBbmkiTyH89s4N/preview'
        },
        {
            id: 5,
            title: 'Mostrando na prática continuação',
            videoUrl: 'https://drive.google.com/file/d/1ah6M8ri1hJBPE0hpeHOb5VU-S03iLzrn/preview'
        },
        {
            id: 6,
            title: 'Agora está preparado para transar de verdade',
            videoUrl: 'https://drive.google.com/file/d/1an6P2W7xwBkowBRgveHHZyP4gJN9XZHF/preview'
        }
    ]
};

export function ModuleViewer({ moduleId, moduleTitle, onBack }: ModuleViewerProps) {
    const lessons = moduleLessons[moduleId] || [];

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
                                    {moduleTitle}
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-8 py-12">
                    {lessons.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">Nenhuma aula disponível ainda.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {lessons.map((lesson) => (
                                <div key={lesson.id} className="bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] border border-[#D4AF37]/20 rounded-xl overflow-hidden">
                                    <div className="p-6 border-b border-[#D4AF37]/20">
                                        <div className="flex items-center gap-3">
                                            <PlayCircle className="w-6 h-6 text-[#D4AF37]" />
                                            <h2 className="text-xl font-bold text-white">{lesson.title}</h2>
                                        </div>
                                    </div>

                                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                        <iframe
                                            src={lesson.videoUrl}
                                            className="absolute top-0 left-0 w-full h-full"
                                            allow="autoplay"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
