import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Sparkles, Check, MessageCircle, Crown, Info, Heart } from 'lucide-react';
import { BRAID_STYLES, EXTENSION_OPTIONS, ACCESSORY_OPTIONS, LENGTH_OPTIONS, SALON_INFO } from '../data/salonData';

interface InteractiveCustomizerProps {
  onOpenBookingWithCustomization: (customData: any) => void;
}

export const InteractiveCustomizer: React.FC<InteractiveCustomizerProps> = ({ onOpenBookingWithCustomization }) => {
  const [selectedStyleId, setSelectedStyleId] = useState(BRAID_STYLES[0].id);
  const [selectedExtensionId, setSelectedExtensionId] = useState(EXTENSION_OPTIONS[0].id);
  const [selectedLengthId, setSelectedLengthId] = useState(LENGTH_OPTIONS[1].id);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([ACCESSORY_OPTIONS[0], ACCESSORY_OPTIONS[1]]);

  const currentStyle = BRAID_STYLES.find((s) => s.id === selectedStyleId) || BRAID_STYLES[0];
  const currentExtension = EXTENSION_OPTIONS.find((e) => e.id === selectedExtensionId) || EXTENSION_OPTIONS[0];
  const currentLength = LENGTH_OPTIONS.find((l) => l.id === selectedLengthId) || LENGTH_OPTIONS[1];

  const toggleAccessory = (acc: string) => {
    if (selectedAccessories.includes(acc)) {
      setSelectedAccessories(selectedAccessories.filter((a) => a !== acc));
    } else {
      setSelectedAccessories([...selectedAccessories, acc]);
    }
  };

  const handleSendToWhatsApp = () => {
    const text = `Olá Ulili Tranças! Montei minhas tranças personalizadas no site:
• Estilo: ${currentStyle.name}
• Alongamento: ${currentExtension.name} (${currentExtension.type})
• Comprimento: ${currentLength.label}
• Acessórios: ${selectedAccessories.length > 0 ? selectedAccessories.join(', ') : 'Nenhum'}
• Localização desejada: Salão El Kheir

Gostaria de agendar o meu horário!`;

    window.open(`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="personalizar" className="py-24 bg-gradient-to-b from-[#0B0609] via-[#12080F] to-[#0B0609] relative border-t border-rose-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-200 text-xs font-semibold tracking-wider uppercase">
            <Sliders className="w-3.5 h-3.5 text-rose-400" />
            <span>Simulador Interativo Ulili</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Personalize Suas <span className="text-rosegold-gradient">Tranças com Alongamento</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Combine os materiais, comprimento e adereços dourados em tempo real e agende em El Kheir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-950/70 p-6 sm:p-8 rounded-3xl border border-rose-500/20 backdrop-blur-md">
            
            {/* Step 1: Style */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-rose-300 uppercase tracking-widest flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] font-black">1</span>
                Escolha o Modelo Principal:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {BRAID_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyleId(style.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedStyleId === style.id
                        ? 'bg-rose-950/80 border-rose-400 text-rose-100 shadow-md'
                        : 'bg-zinc-900/60 border-zinc-800 text-slate-300 hover:border-rose-500/30'
                    }`}
                  >
                    <span className="block font-bold text-xs truncate">{style.name}</span>
                    <span className="block text-[10px] text-rose-300/80 mt-1">{style.duration}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Extension Material */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-rose-300 uppercase tracking-widest flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] font-black">2</span>
                Material do Alongamento:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {EXTENSION_OPTIONS.map((ext) => (
                  <button
                    key={ext.id}
                    onClick={() => setSelectedExtensionId(ext.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedExtensionId === ext.id
                        ? 'bg-rose-950/80 border-rose-400 text-rose-100 shadow-md'
                        : 'bg-zinc-900/60 border-zinc-800 text-slate-300 hover:border-rose-500/30'
                    }`}
                  >
                    <span className="block font-bold text-xs">{ext.name}</span>
                    <span className="block text-[10px] text-rose-300 mt-1">{ext.durability}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Length */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-rose-300 uppercase tracking-widest flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] font-black">3</span>
                Comprimento Desejado:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {LENGTH_OPTIONS.map((len) => (
                  <button
                    key={len.id}
                    onClick={() => setSelectedLengthId(len.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedLengthId === len.id
                        ? 'bg-rose-950/80 border-rose-400 text-rose-100'
                        : 'bg-zinc-900/60 border-zinc-800 text-slate-300 hover:border-rose-500/30'
                    }`}
                  >
                    <span className="block font-bold text-xs">{len.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Accessories */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-rose-300 uppercase tracking-widest flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] font-black">4</span>
                Acessórios & Detalhes Dourados:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {ACCESSORY_OPTIONS.map((acc) => {
                  const isSelected = selectedAccessories.includes(acc);
                  return (
                    <button
                      key={acc}
                      onClick={() => toggleAccessory(acc)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-xl border transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white border-rose-400 font-bold'
                          : 'bg-zinc-900/60 border-zinc-800 text-slate-300 hover:border-rose-500/30'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                      <span>{acc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-Time Preview Summary Column */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              layout
              className="p-6 sm:p-8 rounded-3xl bg-[#12080E] border-2 border-rose-500/40 shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-rose-300" />
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    Resumo do Seu Estilo
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-200 bg-rose-950 border border-rose-500/40 px-2.5 py-1 rounded-md">
                  El Kheir Studio
                </span>
              </div>

              {/* Photo Preview Thumbnail */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden relative border border-rose-500/30">
                <img
                  src={currentStyle.image}
                  alt={currentStyle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                  {currentStyle.name}
                </span>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 bg-zinc-950 p-4 rounded-2xl border border-zinc-900">
                <div className="flex justify-between">
                  <span className="text-slate-400">Modelo Selecionado:</span>
                  <span className="font-bold text-rose-200">{currentStyle.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tipo de Alongamento:</span>
                  <span className="font-bold text-rose-200">{currentExtension.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Comprimento:</span>
                  <span className="font-bold text-rose-200">{currentLength.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Acessórios ({selectedAccessories.length}):</span>
                  <span className="font-bold text-rose-200 truncate max-w-[180px]">
                    {selectedAccessories.length > 0 ? selectedAccessories.join(', ') : 'Nenhum'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-zinc-900">
                  <span className="text-slate-400">Duração estimada:</span>
                  <span className="font-bold text-rose-400">{currentStyle.duration}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenBookingWithCustomization({
                    style: currentStyle,
                    extension: currentExtension,
                    length: currentLength,
                    accessories: selectedAccessories
                  })}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-500 rounded-2xl transition-all shadow-lg shadow-rose-500/30"
                >
                  Confirmar Agendamento Deste Estilo
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-950 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enviar Especificações Via WhatsApp</span>
                </motion.button>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-400 justify-center">
                <Info className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Atendimento personalizado e presencial em El Kheir.</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
