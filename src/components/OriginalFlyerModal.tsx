import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Crown, Download, Check, MapPin, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface OriginalFlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalFlyerModal: React.FC<OriginalFlyerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative max-w-4xl w-full bg-[#12080E] border border-rose-500/50 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2.5 rounded-full bg-zinc-900 border border-zinc-800 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Image */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-rose-500/40 shadow-2xl max-h-[600px] group">
                <img
                  src={SALON_INFO.originalFlyerUrl}
                  alt="Panfleto Oficial Ulili Tranças Original"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="md:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <Crown className="w-6 h-6 text-rose-300" />
                <h3 className="font-cinzel text-2xl font-bold text-rose-100">
                  Panfleto Oficial Ulili Tranças
                </h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Todas as informações, contatos, destaques e diferenciais do panfleto foram fidelizados ao website com interatividade e animações.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 bg-zinc-950 p-4 rounded-2xl border border-rose-500/20">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Slogan:</strong> Beleza, estilo e autoestima em cada trança!</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Especialidade:</strong> TRANÇAS com alongamento</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Estilos:</strong> Tradicionais & Modernas (boho, goddess, fulani, etc.)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Garantias:</strong> Acabamento impecável, higiene e mais segurança</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Localização:</strong> {SALON_INFO.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Contato:</strong> {SALON_INFO.phone}</span>
                </div>
              </div>

              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={SALON_INFO.originalFlyerUrl}
                  download="Ulili_Trancas_Flyer.jpeg"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Panfleto Imagem</span>
                </motion.a>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
