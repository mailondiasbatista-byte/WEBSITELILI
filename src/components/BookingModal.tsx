import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, CheckCircle2, MessageCircle, X, Crown } from 'lucide-react';
import { BRAID_STYLES, TIME_SLOTS, SALON_INFO, EXTENSION_OPTIONS } from '../data/salonData';
import { BraidStyle } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedStyle?: BraidStyle | null;
  customizationData?: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedStyle,
  customizationData
}) => {
  const [selectedStyleId, setSelectedStyleId] = useState(
    preselectedStyle?.id || customizationData?.style?.id || BRAID_STYLES[0].id
  );
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[0]);
  const [extensionType, setExtensionType] = useState(
    customizationData?.extension?.name || EXTENSION_OPTIONS[0].name
  );
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentStyle = BRAID_STYLES.find((s) => s.id === selectedStyleId) || BRAID_STYLES[0];

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      alert('Por favor, informe seu nome e telefone para contato.');
      return;
    }

    setIsSuccess(true);
  };

  const handleLaunchWhatsApp = () => {
    const formattedMessage = `Olá Ulili Tranças! Gostaria de confirmar meu agendamento:

📌 **Dados do Agendamento**:
• **Cliente**: ${clientName}
• **Telefone**: ${clientPhone}
• **Estilo**: ${currentStyle.name}
• **Tipo de Alongamento**: ${extensionType}
• **Data**: ${selectedDate}
• **Horário**: ${selectedTimeSlot}
• **Local**: Salão Ulili Tranças - El Kheir
${notes ? `• **Observações**: ${notes}` : ''}

Aguardando a confirmação do horário! Obrigado!`;

    window.open(`https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent(formattedMessage)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative max-w-xl w-full bg-[#12070E] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
              <Crown className="w-5 h-5 text-rose-300" />
            </div>
            <div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-rose-100">
                Agende já o seu horário!
              </h2>
              <p className="text-xs text-slate-400">
                Salão Ulili Tranças em El Kheir • Contato: {SALON_INFO.phone}
              </p>
            </div>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmitBooking} className="space-y-5">
              
              {/* Style Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-rose-300 uppercase tracking-wider block">
                  1. Selecione o Estilo de Trança:
                </label>
                <select
                  value={selectedStyleId}
                  onChange={(e) => setSelectedStyleId(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-950 rounded-2xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  {BRAID_STYLES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} - {s.priceEstimate})
                    </option>
                  ))}
                </select>
              </div>

              {/* Extension Material */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-rose-300 uppercase tracking-wider block">
                  2. Preferência de Alongamento:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {EXTENSION_OPTIONS.map((ext) => (
                    <button
                      type="button"
                      key={ext.id}
                      onClick={() => setExtensionType(ext.name)}
                      className={`p-3 rounded-2xl text-left text-xs font-medium transition-all ${
                        extensionType === ext.name
                          ? 'bg-rose-950 text-rose-100 font-bold shadow-md'
                          : 'bg-zinc-950 text-slate-400'
                      }`}
                    >
                      {ext.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-rose-300 uppercase tracking-wider block flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-rose-400" />
                    Data Desejada:
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-950 rounded-2xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-rose-300 uppercase tracking-wider block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-400" />
                    Horário:
                  </label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-950 rounded-2xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot} h
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 block">
                    Seu Nome Completo:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Ex: Amina"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-zinc-950 rounded-2xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 block">
                    Telefone / WhatsApp:
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="Ex: +212 719 684 150"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-zinc-950 rounded-2xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">
                  Observações ou Dúvidas (Opcional):
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Anéis dourados e presilhas de borboleta..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-950 rounded-2xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 rounded-2xl transition-all shadow-xl shadow-rose-500/30"
              >
                Avançar Para Confirmação
              </motion.button>

            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-2xl font-bold text-rose-100">
                  Pré-Agendamento Concluído!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Clique abaixo para enviar a confirmação para o WhatsApp <strong className="text-rose-300">{SALON_INFO.phone}</strong> em El Kheir.
                </p>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl text-left text-xs space-y-2 text-slate-300 max-w-md mx-auto shadow-inner">
                <p><strong>Cliente:</strong> {clientName}</p>
                <p><strong>Estilo:</strong> {currentStyle.name}</p>
                <p><strong>Alongamento:</strong> {extensionType}</p>
                <p><strong>Data & Horário:</strong> {selectedDate} às {selectedTimeSlot}h</p>
                <p><strong>Localização:</strong> El Kheir</p>
              </div>

              <button
                onClick={handleLaunchWhatsApp}
                className="w-full py-4 text-xs font-bold uppercase tracking-widest text-white bg-emerald-600 hover:bg-emerald-500 rounded-2xl transition-all shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Enviar via WhatsApp ({SALON_INFO.phone})</span>
              </button>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white underline block mx-auto"
              >
                Fechar Janela
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
