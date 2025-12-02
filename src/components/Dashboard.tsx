import { useState } from 'react';
import {
  BookOpen, Target, Zap, Gift, LogOut
} from 'lucide-react';
import { ModuleViewer } from './ModuleViewer';
import { IndividualBonusModule } from './IndividualBonusModule';

const modules = [
  { id: 1, title: 'O Segredo Dos Pornstars - Módulo 1', icon: BookOpen },
  { id: 2, title: 'O Segredo Dos Pornstars - Módulo 2', icon: Target },
  { id: 3, title: 'O Segredo Dos Pornstars - Módulo 3', icon: Zap },
];

const bonusModules = [
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

interface ModuleCardProps {
  module: typeof modules[0];
  onClick: () => void;
}

function ModuleCard({ module, onClick }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <div
      onClick={onClick}
      className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#D4AF37]/10 transition-all duration-300"></div>

      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-all duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-black/40 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-300">
            <Icon className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <span className="text-[#8C1D39] text-sm font-bold">#{module.id}</span>
        </div>

        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
          {module.title}
        </h3>
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}>
      </div>
    </div>
  );
}

interface BonusCardProps {
  bonus: typeof bonusModules[0];
  onClick: () => void;
}

function BonusCard({ bonus, onClick }: BonusCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-gradient-to-br from-[#8C1D39] to-[#6B1529] border-2 border-[#D4AF37] rounded-xl p-6 cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/20 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/30 transition-all duration-300"></div>

      <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-black/40 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-300">
            <Gift className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <span className="text-[#D4AF37] text-xs font-bold tracking-widest">BÔNUS #{bonus.id}</span>
        </div>
        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
          {bonus.title}
        </h3>
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}>
      </div>
    </div>
  );
}

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedBonus, setSelectedBonus] = useState<number | null>(null);

  if (selectedBonus !== null) {
    const bonus = bonusModules.find(b => b.id === selectedBonus);
    if (bonus) {
      return (
        <IndividualBonusModule
          title={bonus.title}
          pdfUrl={bonus.pdfUrl}
          onBack={() => setSelectedBonus(null)}
        />
      );
    }
  }

  if (selectedModule !== null) {
    const module = modules.find(m => m.id === selectedModule);
    if (module) {
      return (
        <ModuleViewer
          moduleId={module.id}
          moduleTitle={module.title}
          onBack={() => setSelectedModule(null)}
        />
      );
    }
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
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#D4AF37]" style={{ textShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}>
                O SEGREDO DOS PORNSTARS
              </h1>
              <p className="text-gray-400 text-sm">Área de Membros</p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-6 py-3 bg-black/60 border border-[#D4AF37]/30 rounded-lg text-white hover:border-[#D4AF37] transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-8 py-12">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">
              Bem-vindo
            </h2>
            <p className="text-gray-400 text-lg">
              Desenvolva Sua Jornada Sexual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                onClick={() => setSelectedModule(module.id)}
              />
            ))}
            {bonusModules.map((bonus) => (
              <BonusCard
                key={bonus.id}
                bonus={bonus}
                onClick={() => setSelectedBonus(bonus.id)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
