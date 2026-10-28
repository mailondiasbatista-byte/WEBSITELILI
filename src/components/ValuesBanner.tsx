import React from 'react';
import { motion } from 'motion/react';
import { Crown, Heart, Sparkles, Shield } from 'lucide-react';

export const ValuesBanner: React.FC = () => {
  const valueIcons = [
    { title: 'QUALIDADE', icon: Crown, desc: 'Acabamento minucioso' },
    { title: 'BELEZA', icon: Heart, desc: 'Realça seus traços' },
    { title: 'ESTILO', icon: Sparkles, desc: 'Tendência & Autoral' },
    { title: 'CONFIANÇA', icon: Shield, desc: 'Biossegurança total' },
  ];

  return (
    <section className="relative py-8 bg-gradient-to-r from-rose-950/70 via-[#150A11] to-rose-950/70 border-y border-rose-500/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {valueIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-center justify-center gap-3.5 p-3.5 rounded-2xl bg-zinc-950/60 border border-rose-500/20 hover:border-rose-400/50 transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-rose-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-cinzel text-sm sm:text-base font-bold tracking-widest text-rose-100">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
