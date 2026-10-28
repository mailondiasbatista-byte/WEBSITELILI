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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 overflow-hidden bg-radial from-rose-950/25 via-[#0D070B] to-[#080407]">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-500/12 rounded-full blur-[150px] pointer-events-none animate-pulse-gold" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative hairline grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b14240f_1px,transparent_1px),linear-gradient(to_bottom,#3b14240f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Animated Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            
            {/* Crown & Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-rose-900/20"
            >
              <Crown className="w-4 h-4 text-rose-300 animate-rosegold-glow" />
              <span>Studio VIP & Salão de Tranças — El Kheir</span>
            </motion.div>

            {/* Main Title Lockup */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="font-cinzel text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.1]"
              >
                <span className="block text-rosegold-gradient drop-shadow-lg">
                  {SALON_INFO.name}
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="inline-block"
              >
                <p className="font-script text-3xl sm:text-5xl text-rose-300/90 tracking-wide mt-1 drop-shadow-md">
                  {SALON_INFO.tagline}
                </p>
              </motion.div>
            </div>

            {/* Promoted Feature Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="w-full sm:max-w-xl p-5 rounded-3xl bg-gradient-to-r from-rose-950/60 via-rose-900/30 to-zinc-950/60 border border-rose-500/40 backdrop-blur-md relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-pink-500/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Destaque VIP
                </span>
                <span className="text-xs text-rose-200/90 font-medium">
                  Cabelo Sintético ou Natural
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-rose-100">
                TRANÇAS COM ALONGAMENTO
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                Técnicas modernas e tradicionais com acabamento leve, sem dor na raiz e máxima durabilidade para o seu dia a dia.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-rose-500/20 text-xs text-rose-200 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Acabamento Impecável</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Higiene & Biossegurança</span>
                </div>
              </div>
            </motion.div>

            {/* Location & Contact Info Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-200"
            >
              <div className="flex items-center gap-2 bg-rose-950/40 border border-rose-500/30 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Localização: <strong className="text-rose-200 font-bold">{SALON_INFO.location}</strong></span>
              </div>

              <a
                href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 bg-rose-950/40 border border-rose-500/30 px-3.5 py-2 rounded-xl hover:border-rose-400 transition-colors backdrop-blur-sm"
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
                whileHover={{ scale: 1.04, boxShadow: '0 15px 35px -5px rgba(244, 63, 94, 0.45)' }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-3 px-9 py-4 text-xs font-extrabold tracking-widest text-white uppercase bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 rounded-2xl shadow-xl shadow-rose-500/25 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Agende Já O Seu Horário!</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenFlyerModal}
                className="flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-bold text-rose-200 bg-rose-950/40 border border-rose-500/40 hover:border-rose-400 hover:bg-rose-950/70 rounded-2xl transition-all"
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

          {/* Right Column: Animated Hero Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-rose-400 via-rose-600/50 to-pink-950/90 shadow-2xl shadow-rose-500/30 group">
              
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-zinc-950">
                <img
                  src={SALON_INFO.heroMainImage}
                  alt="Ulili Tranças Modelo Principal"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D070B] via-black/20 to-transparent" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl rosegold-glass-panel border border-rose-500/40 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold font-cinzel text-rose-100">
                        Design Fulani de Luxo
                      </h3>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Com anéis e adereços dourados artesanais
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white bg-rose-600 border border-rose-400 px-3 py-1 rounded-lg shadow-md">
                      Estilo VIP
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Crown Badge */}
              <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/80 border border-rose-400/50 flex items-center justify-center backdrop-blur-md shadow-xl animate-float-slow">
                <Crown className="w-5 h-5 text-rose-300 animate-rosegold-glow" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
