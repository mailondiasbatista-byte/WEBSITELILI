import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Crown, MapPin, Phone, Calendar, Heart, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFlyerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenFlyerModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 overflow-hidden bg-radial from-rose-950/30 via-[#090407] to-[#050204]">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/12 rounded-full blur-[160px] pointer-events-none animate-pulse-gold" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            
            {/* Crown Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/70 text-rose-200 text-xs font-bold tracking-wider uppercase shadow-xl shadow-black/40 backdrop-blur-md"
            >
              <Crown className="w-4 h-4 text-rose-300 animate-rosegold-glow" />
              <span>Ulili Tranças • Localização: {SALON_INFO.location}</span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="font-cinzel text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.1]"
              >
                <span className="block text-rosegold-gradient drop-shadow-xl">
                  {SALON_INFO.name}
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <p className="font-script text-3xl sm:text-5xl text-rose-300/90 tracking-wide mt-1 drop-shadow-lg">
                  {SALON_INFO.tagline}
                </p>
              </motion.div>
            </div>

            {/* Main Promoted Banner Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="w-full sm:max-w-xl p-6 rounded-3xl bg-gradient-to-r from-rose-950/70 via-rose-900/40 to-zinc-950/70 backdrop-blur-md relative overflow-hidden shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3.5 py-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-lg">
                  Destaque do Salão
                </span>
                <span className="text-xs text-rose-200 font-medium">
                  Cabelo Sintético ou Natural
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black font-cinzel text-rose-100 tracking-wide mt-1">
                TRANÇAS com alongamento
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Tranças tradicionais e modernas produzidas com acabamento impecável, higiene e mais segurança em El Kheir.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-rose-900/40 text-xs text-rose-200 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Acabamento impecável</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Higiene e mais segurança</span>
                </div>
              </div>
            </motion.div>

            {/* Location & Phone Quick Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-200"
            >
              <div className="flex items-center gap-2 bg-zinc-950/80 px-4 py-2.5 rounded-2xl shadow-md">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Localização: <strong className="text-rose-200 font-bold">{SALON_INFO.location}</strong></span>
              </div>

              <a
                href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 bg-zinc-950/80 px-4 py-2.5 rounded-2xl shadow-md hover:bg-zinc-900 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Contacto: <strong className="text-rose-200 font-bold">{SALON_INFO.phone}</strong></span>
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 20px 40px -10px rgba(244, 63, 94, 0.5)' }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-3 px-9 py-4 text-xs font-black tracking-widest text-white uppercase bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 rounded-2xl shadow-2xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Agende já o seu horário!</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenFlyerModal}
                className="flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-bold text-rose-200 bg-rose-950/60 hover:bg-rose-900/80 rounded-2xl shadow-lg transition-all"
              >
                <Sparkles className="w-4 h-4 text-rose-400" />
                <span>Ver Panfleto Oficial</span>
              </motion.button>
            </motion.div>

            <p className="text-[11px] text-rose-300/80 uppercase tracking-widest font-semibold pt-1 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>{SALON_INFO.subtagline}</span>
            </p>

          </motion.div>

          {/* Right Column: Hero Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 group">
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-950">
                <img
                  src={SALON_INFO.heroMainImage}
                  alt="Ulili Tranças Modelo Principal"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0407] via-black/20 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl rosegold-glass-panel backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold font-cinzel text-rose-100">
                        Tranças Modernas & Fulani
                      </h3>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Com anéis dourados, baby hair e acabamento impecável
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white bg-rose-600 px-3 py-1 rounded-xl shadow-lg">
                      VIP Style
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/80 flex items-center justify-center backdrop-blur-md shadow-2xl animate-float-slow">
                <Crown className="w-6 h-6 text-rose-300 animate-rosegold-glow" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
