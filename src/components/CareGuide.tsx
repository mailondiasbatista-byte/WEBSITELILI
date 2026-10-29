import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Moon, Sparkles, HeartHandshake } from 'lucide-react';
import { CARE_TIPS } from '../data/salonData';

export const CareGuide: React.FC = () => {
  return (
    <section className="py-24 bg-[#070305] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 text-rose-200 text-xs font-bold tracking-wider uppercase shadow-lg">
            <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
            <span>Guia de Cuidados Pós-Trançado</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Como Manter Suas <span className="text-rosegold-gradient">Tranças Sempre Lindas</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Dicas essenciais para manter o acabamento impecável e proteger a saúde do seu cabelo em El Kheir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARE_TIPS.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-7 rounded-3xl bg-zinc-950/90 space-y-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 flex items-center justify-center">
                {idx === 0 && <Droplets className="w-6 h-6 text-rose-300" />}
                {idx === 1 && <Moon className="w-6 h-6 text-rose-300" />}
                {idx === 2 && <Sparkles className="w-6 h-6 text-rose-300" />}
              </div>

              <div>
                <h3 className="font-cinzel text-xl font-extrabold text-rose-100">
                  {tip.title}
                </h3>
                <p className="text-xs font-semibold text-rose-300/90 mt-1">
                  {tip.subtitle}
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                {tip.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
