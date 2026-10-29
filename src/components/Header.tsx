import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Calendar, MessageCircle, Menu, X, FileImage, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenFlyerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenFlyerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 bg-[#0A0407]/95 backdrop-blur-md shadow-lg shadow-black/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 group whitespace-nowrap shrink-0">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 via-rose-400 to-amber-300 p-0.5 shadow-lg shadow-rose-500/25"
          >
            <div className="w-full h-full bg-[#12070E] rounded-full flex items-center justify-center">
              <Crown className="w-5 h-5 text-rose-300 animate-rosegold-glow" />
            </div>
          </motion.div>
          
          <div className="flex flex-col">
            <span className="font-cinzel text-xl sm:text-2xl font-extrabold tracking-wider text-rosegold-gradient">
              {SALON_INFO.name}
            </span>
            <span className="text-[10px] tracking-widest text-rose-300/80 uppercase font-bold flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-rose-400" />
              El Kheir • Studio VIP
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
          <a href="#estilos" className="hover:text-rose-300 transition-colors whitespace-nowrap shrink-0">
            Estilos & Galeria
          </a>
          <a href="#servicos" className="hover:text-rose-300 transition-colors whitespace-nowrap shrink-0">
            Diferenciais
          </a>
          <a href="#personalizar" className="hover:text-rose-300 transition-colors whitespace-nowrap shrink-0">
            Personalizar
          </a>
          <a href="#localizacao" className="hover:text-rose-300 transition-colors whitespace-nowrap shrink-0">
            Localização
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenFlyerModal}
            className="flex items-center gap-1.5 text-xs text-rose-200/90 hover:text-rose-100 bg-rose-950/60 px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap shrink-0 shadow-md"
          >
            <FileImage className="w-3.5 h-3.5 text-rose-400" />
            <span>Ver Panfleto</span>
          </motion.button>
        </nav>

        {/* Primary Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Ulili Tranças! Gostaria de agendar um horário em El Kheir.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 rounded-xl transition-all shadow-md"
            title="Contato WhatsApp (+212 719 684 150)"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-500 rounded-xl shadow-xl shadow-rose-500/25 transition-all whitespace-nowrap shrink-0 uppercase"
          >
            <Calendar className="w-4 h-4" />
            <span>Agende já o seu horário!</span>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-rose-600 rounded-lg shadow-md"
          >
            Agendar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#12070E] px-5 py-6 space-y-4 overflow-hidden shadow-2xl"
          >
            <a
              href="#estilos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-100 hover:text-rose-300 font-medium text-sm py-1"
            >
              Estilos & Galeria de Fotos
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-100 hover:text-rose-300 font-medium text-sm py-1"
            >
              Nossos Diferenciais
            </a>
            <a
              href="#personalizar"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-100 hover:text-rose-300 font-medium text-sm py-1"
            >
              Personalizar Tranças
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-100 hover:text-rose-300 font-medium text-sm py-1"
            >
              Localização & Contato
            </a>
            
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFlyerModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-rose-200 bg-rose-950/70 rounded-xl shadow-sm"
              >
                <FileImage className="w-4 h-4 text-rose-400" />
                <span>Ver Panfleto Oficial Original</span>
              </button>
              
              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Ulili Tranças! Gostaria de agendar um horário em El Kheir.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-emerald-300 bg-emerald-950/70 rounded-xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {SALON_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
