import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Sparkles, Check, MessageCircle, Crown, Info } from 'lucide-react';
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
    <section id="personalizar" className="py-24 bg-gradient-to-b from-[#090407] via-[#12070E] to-[#090407] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 text-rose-200 text-xs font-bold tracking-wider uppercase shadow-lg">
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
          <div className="lg:col-span-7 space-y-8 bg-zinc-950/90 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-2xl">
            
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
                    className={`p-3.5 rounded-2xl text-left transition-all ${
                      selectedStyleId === style.id
                        ? 'bg-rose-950 text-rose-100 font-bold shadow-lg shadow-rose-950/50'
                        : 'bg-zinc-900/80 text-slate-300 hover:bg-zinc-900'
                    }`}
                  >
                    <span className="block font-bold text-xs truncate">{style.name}</span>
                    <span className="block text-[10px] text-rose-300/80 mt-1">{style.duration}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Extension */}
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
                    className={`p-3.5 rounded-2xl text-left transition-all ${
                      selectedExtensionId === ext.id
                        ? 'bg-rose-950 text-rose-100 font-bold shadow-lg'
                        : 'bg-zinc-900/80 text-slate-300 hover:bg-zinc-900'
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
                    className={`p-3.5 rounded-2xl text-left transition-all ${
                      selectedLengthId === len.id
                        ? 'bg-rose-950 text-rose-100 font-bold shadow-lg'
                        : 'bg-zinc-900/80 text-slate-300 hover:bg-zinc-900'
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
                      className={`px-4 py-2.5 text-xs font-medium rounded-2xl transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold shadow-lg'
                          : 'bg-zinc-900 text-slate-300 hover:bg-zinc-800'
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

          {/* Real-Time Preview Summary */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              layout
              className="p-6 sm:p-8 rounded-3xl bg-[#12070E] shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-rose-300" />
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    Resumo do Seu Estilo
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-200 bg-rose-950 px-3 py-1 rounded-lg">
                  El Kheir Studio
                </span>
              </div>

              {/* Photo Preview Thumbnail */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden relative shadow-lg">
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

              {/* Specs */}
              <div className="space-y-2.5 text-xs text-slate-300 bg-zinc-950 p-4 rounded-2xl">
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
                  className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 rounded-2xl transition-all shadow-xl shadow-rose-500/30"
                >
                  Agende já o seu horário!
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 hover:bg-emerald-950 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enviar especificações via WhatsApp</span>
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
