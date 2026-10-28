import React from 'react';
import { Crown, MessageCircle, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenFlyerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenFlyerModal }) => {
  return (
    <footer className="bg-[#070305] border-t border-rose-500/20 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                <Crown className="w-5 h-5 text-rose-300" />
              </div>
              <span className="font-cinzel text-2xl font-bold text-rosegold-gradient">
                {SALON_INFO.name}
              </span>
            </div>

            <p className="font-script text-2xl text-rose-300/80">
              {SALON_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Studio especializado em tranças tradicionais, modernas e com alongamento sintético ou natural em El Kheir. Cuidando do seu cabelo, realçando a sua beleza.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-rose-300 bg-rose-950/80 border border-rose-500/30 px-3 py-1 rounded-md">
                El Kheir
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-rose-300 bg-rose-950/80 border border-rose-500/30 px-3 py-1 rounded-md">
                {SALON_INFO.phone}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-rose-100 uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#estilos" className="hover:text-rose-300 transition-colors">Catálogo de Estilos</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-rose-300 transition-colors">Nossos Diferenciais</a>
              </li>
              <li>
                <a href="#personalizar" className="hover:text-rose-300 transition-colors">Personalizar Tranças</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-rose-300 transition-colors">Localização em El Kheir</a>
              </li>
              <li>
                <button onClick={onOpenFlyerModal} className="text-rose-300 hover:text-rose-200 transition-colors">
                  Ver Panfleto Oficial Original
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-rose-100 uppercase tracking-wider">
              Agendamento & Contato
            </h4>

            <div className="space-y-2.5">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-500 rounded-xl transition-all shadow-md"
              >
                Agender Horário no Salão
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Ulili Tranças! Gostaria de agendar um horário em El Kheir.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-950 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar no WhatsApp ({SALON_INFO.phone})</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Ulili Tranças. Todos os direitos reservados. Localização: El Kheir.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>para {SALON_INFO.name}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
