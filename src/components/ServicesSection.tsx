import React from 'react';
import { motion } from 'motion/react';
import { Crown, Sparkles, Feather, Scissors, ShieldCheck, Gem, Check } from 'lucide-react';
import { SALON_PILLARS } from '../data/salonData';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-6 h-6 text-rose-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-rose-300" />;
      case 'Feather': return <Feather className="w-6 h-6 text-rose-300" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-rose-300" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-rose-300" />;
      case 'Gem': return <Gem className="w-6 h-6 text-rose-300" />;
      default: return <Sparkles className="w-6 h-6 text-rose-300" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#0B0609] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-rose-600/8 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-200 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Nossos Serviços & Garantias</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Por Que Escolher O <span className="text-rosegold-gradient">Ulili Tranças</span>?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Rigor técnico, carinho com o seu couro cabeludo e acabamento artesanal impecável em cada trança.
          </p>
        </div>

        {/* 6 Pillars Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALON_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-zinc-950/80 border border-rose-500/20 hover:border-rose-400/60 hover:bg-zinc-950 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-300 bg-rose-950/70 border border-rose-500/30 px-3 py-1 rounded-lg">
                    Garantia VIP
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-rose-100 group-hover:text-rose-300 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-xs font-semibold text-rose-300/90 mt-1">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-rose-400" />
                  Atendimento em El Kheir
                </span>
                <button
                  onClick={() => onOpenBooking(pillar.id)}
                  className="text-xs font-bold text-rose-300 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Agendar serviço →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
