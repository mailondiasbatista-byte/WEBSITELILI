import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Star, Crown, Coffee, Wifi, Tv, ShieldCheck } from 'lucide-react';
import { SALON_INFO, REVIEWS } from '../data/salonData';

interface LocationContactProps {
  onOpenBooking: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenBooking }) => {
  return (
    <section id="localizacao" className="py-24 bg-[#0B0609] relative border-t border-rose-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Location & Contact */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-200 text-xs font-semibold tracking-wider uppercase mb-3">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Localização & Atendimento VIP</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
                Visite Nosso Studio em <span className="text-rosegold-gradient">{SALON_INFO.location}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Ambiente acolhedor e climatizado preparado para garantir o seu conforto e autoestima durante todo o atendimento.
              </p>
            </div>

            {/* Address & Direct Phone */}
            <div className="p-6 rounded-3xl bg-zinc-950/80 border border-rose-500/30 space-y-4 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-rose-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-rose-100">Localização Oficial</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{SALON_INFO.fullLocation}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-zinc-900">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-rose-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-rose-100">Telefone / WhatsApp Directo</h4>
                  <p className="text-xs text-rose-300 font-mono font-bold mt-0.5">{SALON_INFO.phone}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Ulili Tranças! Gostaria de saber a localização exata do salão em El Kheir.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ({SALON_INFO.phone})</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('El Kheir Ulili Trancas')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-rose-950/60 border border-rose-500/40 hover:bg-rose-900/60 text-rose-200 text-xs font-bold transition-all flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Abrir no Google Maps</span>
                </motion.a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-3xl bg-zinc-950/80 border border-zinc-900 space-y-3">
              <div className="flex items-center gap-2 font-cinzel text-sm font-bold text-rose-100">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>Horário de Funcionamento</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                {SALON_INFO.workingHours.map((wh, idx) => (
                  <div key={idx} className="flex justify-between border-b border-zinc-900 pb-1.5">
                    <span className="text-slate-400">{wh.days}</span>
                    <strong className="text-rose-300">{wh.hours}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Salon Amenities */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                Comodidades do Nosso Salão:
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Wi-Fi Rápido Grátis</span>
                </div>
                <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Café & Bebidas VIP</span>
                </div>
                <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center gap-2">
                  <Tv className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Ambiente Climatizado</span>
                </div>
                <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Atendimento Privativo</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Reviews */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-200 text-xs font-semibold tracking-wider uppercase mb-3">
                <Star className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span>Depoimentos & Avaliações</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
                O Que Dizem Nossas <span className="text-rosegold-gradient">Clientes VIP</span>
              </h2>
            </div>

            <div className="space-y-4">
              {REVIEWS.map((rev) => (
                <motion.div
                  key={rev.id}
                  whileHover={{ x: 4 }}
                  className="p-6 rounded-3xl bg-zinc-950/70 border border-rose-500/20 space-y-3 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-rose-100">{rev.clientName}</h4>
                      <span className="text-[10px] text-rose-300 uppercase font-semibold">
                        {rev.styleDone}
                      </span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>

                  <div className="flex justify-between text-[10px] text-slate-500 pt-2 border-t border-zinc-900">
                    <span>Atendimento em {rev.location}</span>
                    <span>{rev.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="p-7 rounded-3xl bg-gradient-to-r from-rose-950/80 via-pink-950/40 to-zinc-950 border border-rose-500/40 text-center space-y-4 shadow-2xl">
              <Crown className="w-8 h-8 text-rose-300 mx-auto animate-rosegold-glow" />
              <h3 className="font-cinzel text-xl font-bold text-rose-100">
                Pronta para Transformar Seu Visual?
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Agende antecipadamente e garanta seu atendimento personalizado em El Kheir.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl transition-all shadow-lg shadow-rose-500/30"
              >
                Agendar Horário Agora
              </motion.button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
