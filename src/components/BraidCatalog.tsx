import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, Eye, Calendar, Check, X } from 'lucide-react';
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
    <section id="estilos" className="py-24 bg-[#0A0407] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 text-rose-200 text-xs font-bold tracking-wider uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Galeria de Estilos Reais do Salão</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Modelos de <span className="text-rosegold-gradient">Tranças & Penteados</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Inspire-se nos estilos criados para valorizar a beleza e a autoestima das nossas clientes em El Kheir.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'todas', label: 'Todas as Tranças' },
            { id: 'tradicionais', label: 'Tranças Tradicionais (raiz, box braids, nagô)' },
            { id: 'modernas', label: 'Tranças Modernas (boho, goddess, fulani)' },
            { id: 'alongamento', label: 'Com Alongamento' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              className={`px-5 py-3 text-xs font-bold rounded-2xl transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-xl shadow-rose-500/30'
                  : 'bg-zinc-950 text-slate-300 hover:bg-zinc-900 shadow-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
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
                className="group rounded-3xl bg-zinc-950/90 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-rose-950/40"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer" onClick={() => setSelectedStyleModal(style)}>
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Category Pill */}
                    <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-200 bg-black/80 rounded-xl backdrop-blur-md shadow-lg">
                      {style.category === 'modernas' ? 'Moderna' : style.category === 'tradicionais' ? 'Tradicional' : 'Alongamento'}
                    </span>

                    {/* Expand Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStyleModal(style);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/80 text-rose-300 hover:text-white transition-colors shadow-lg"
                      title="Ampliar Foto"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-rose-200 font-medium">
                      <span className="flex items-center gap-1.5 bg-black/80 px-3 py-1 rounded-xl backdrop-blur-sm shadow-md">
                        <Clock className="w-3.5 h-3.5 text-rose-400" />
                        {style.duration}
                      </span>
                      <span className="bg-rose-950/90 text-rose-200 px-3 py-1 rounded-xl font-bold shadow-md">
                        {style.priceEstimate}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-cinzel text-xl font-extrabold text-white group-hover:text-rose-300 transition-colors">
                      {style.name}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
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

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectStyleForBooking(style)}
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-500 rounded-2xl transition-all shadow-xl shadow-rose-500/20 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agender este estilo</span>
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
              className="relative max-w-2xl w-full bg-[#12070E] rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedStyleModal(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-zinc-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={selectedStyleModal.image}
                  alt={selectedStyleModal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300 bg-rose-950 px-3 py-1 rounded-md">
                  {selectedStyleModal.category}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-rose-100 mt-2">
                  {selectedStyleModal.name}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {selectedStyleModal.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 bg-zinc-950 p-4 rounded-2xl">
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
                  className="px-6 py-3 text-xs font-bold text-white uppercase bg-rose-600 hover:bg-rose-500 rounded-2xl shadow-lg"
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
