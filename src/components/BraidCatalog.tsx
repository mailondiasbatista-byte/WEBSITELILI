import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, Eye, Calendar, Check, X, Heart } from 'lucide-react';
import { BRAID_STYLES } from '../data/salonData';
import { BraidStyle, CategoryType } from '../types';

interface BraidCatalogProps {
  onSelectStyleForBooking: (style: BraidStyle) => void;
}

export const BraidCatalog: React.FC<BraidCatalogProps> = ({ onSelectStyleForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('todas');
  const [selectedStyleModal, setSelectedStyleModal] = useState<BraidStyle | null>(null);

  const filteredStyles = BRAID_STYLES.filter((style) => {
    if (activeCategory === 'todas') return true;
    if (activeCategory === 'alongamento') return style.popularWithExtensions;
    return style.category === activeCategory;
  });

  return (
    <section id="estilos" className="py-24 bg-[#0E080D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-200 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Catálogo & Galeria de Fotos</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Escolha O Seu <span className="text-rosegold-gradient">Estilo de Trança</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Do clássico ao contemporâneo, personalizamos o tom, o comprimento e os adereços conforme o seu gosto.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: 'todas', label: 'Todas as Tranças' },
            { id: 'tradicionais', label: 'Tranças Tradicionais' },
            { id: 'modernas', label: 'Tranças Modernas (Boho/Fulani)' },
            { id: 'alongamento', label: 'Com Alongamento' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 relative ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-zinc-950/80 text-slate-300 border border-zinc-800 hover:border-rose-500/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Style Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredStyles.map((style) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={style.id}
                className="group rounded-3xl bg-zinc-950/80 border border-rose-500/20 hover:border-rose-400/60 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer" onClick={() => setSelectedStyleModal(style)}>
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    
                    {/* Category Pill */}
                    <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-200 bg-black/80 border border-rose-500/40 rounded-lg backdrop-blur-md">
                      {style.category === 'modernas' ? 'Moderna' : style.category === 'tradicionais' ? 'Tradicional' : 'Alongamento'}
                    </span>

                    {/* Quick View */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStyleModal(style);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/70 border border-rose-400/40 text-rose-300 hover:text-white transition-colors"
                      title="Ampliar Foto"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-rose-200 font-medium">
                      <span className="flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-zinc-800">
                        <Clock className="w-3.5 h-3.5 text-rose-400" />
                        {style.duration}
                      </span>
                      <span className="bg-rose-950/90 border border-rose-500/50 text-rose-200 px-2.5 py-1 rounded-lg font-bold">
                        {style.priceEstimate}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                      {style.name}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {style.description}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      {style.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-rose-200/90">
                          <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectStyleForBooking(style)}
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-500 rounded-xl transition-all shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar Este Estilo</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedStyleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full bg-[#12080E] border border-rose-500/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedStyleModal(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-rose-500/20">
                <img
                  src={selectedStyleModal.image}
                  alt={selectedStyleModal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300 bg-rose-950/80 border border-rose-500/30 px-3 py-1 rounded-md">
                  {selectedStyleModal.category}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-rose-100 mt-2">
                  {selectedStyleModal.name}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {selectedStyleModal.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 bg-zinc-950 p-4 rounded-2xl border border-zinc-900">
                <div>
                  <span className="text-slate-400 block">Duração Estimada:</span>
                  <strong className="text-rose-300">{selectedStyleModal.duration}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Estimativa de Valor:</span>
                  <strong className="text-rose-300">{selectedStyleModal.priceEstimate}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Durabilidade:</span>
                  <strong className="text-rose-300">{selectedStyleModal.maintenanceWeeks}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Indicado para:</span>
                  <strong className="text-rose-300">{selectedStyleModal.recommendedHairType}</strong>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedStyleModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    const style = selectedStyleModal;
                    setSelectedStyleModal(null);
                    onSelectStyleForBooking(style);
                  }}
                  className="px-6 py-3 text-xs font-bold text-white uppercase bg-rose-600 hover:bg-rose-500 rounded-xl shadow-lg"
                >
                  Continuar Agendamento
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
