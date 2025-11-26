import { useState } from 'react';
import { Lock, Mail, AlertCircle } from 'lucide-react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAutoFill = () => {
    setEmail('aluno4535@gmail.com');
    setPassword('aluno4535');
    setError('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    if (email === 'aluno4535@gmail.com' && password === 'aluno4535') {
      onLoginSuccess();
    } else {
      setError('Email ou senha incorretos. Verifique as credenciais fornecidas.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0D0D0D] to-[#0D0D0D]"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8C1D39] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#D4AF37] mb-2" style={{ textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>
            O SEGREDO DOS PORNSTARS
          </h1>
          <p className="text-gray-400 text-sm tracking-widest mt-2">ÁREA DE MEMBROS EXCLUSIVA</p>
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-[420px] backdrop-blur-xl bg-black/40 border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Acesso Restrito</h2>
            <p className="text-gray-400 text-sm">Entre com suas credenciais exclusivas</p>
          </div>

          <div className="space-y-5">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
              <input
                type="email"
                placeholder="seu@email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/60 border-2 border-[#D4AF37]/50 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                style={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)' }}
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
              <input
                type="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/60 border-2 border-[#D4AF37]/50 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                style={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)' }}
              />
            </div>

            <div className="bg-black/60 border border-[#D4AF37]/30 rounded-lg p-5 text-center">
              <p className="text-gray-300 text-sm">
                <span className="text-[#D4AF37] font-bold">Email:</span> aluno4535@gmail.com
              </p>
              <p className="text-gray-300 text-sm mt-2">
                <span className="text-[#D4AF37] font-bold">Senha:</span> aluno4535
              </p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Outras credenciais não terão acesso. Use os dados acima para entrar.
              </p>
              <button
                type="button"
                onClick={handleAutoFill}
                className="w-full mt-4 bg-gradient-to-r from-[#8C1D39] to-[#6B1529] text-[#D4AF37] font-bold py-3 rounded-lg hover:from-[#A01F3E] hover:to-[#7B1C32] transition-all duration-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]"
              >
                Preencher Automaticamente
              </button>
            </div>

            {error && (
              <div className="bg-[#8C1D39]/20 border border-[#8C1D39] rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#8C1D39] flex-shrink-0 mt-0.5" />
                <p className="text-[#ff9999] text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-bold py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
            >
              {isLoading ? 'VERIFICANDO...' : 'ENTRAR'}
            </button>
          </div>

          <p className="text-center text-gray-500 text-xs mt-6">
            Acesso exclusivo para alunos
          </p>
        </form>
      </div>
    </div>
  );
}
