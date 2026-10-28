import { BraidStyle, SalonPillar, HairExtensionOption, ReviewItem, CareTip } from '../types';

export const SALON_INFO = {
  name: 'Ulili Tranças',
  tagline: 'Beleza, estilo e autoestima em cada trança!',
  subtagline: 'CUIDANDO DO SEU CABELO, REALÇANDO A SUA BELEZA!',
  location: 'El Kheir',
  fullLocation: 'El Kheir, Salão VIP Ulili Tranças',
  phone: '+212 719 684 150',
  whatsappRaw: '212719684150',
  values: ['QUALIDADE', 'BELEZA', 'ESTILO', 'CONFIANÇA'],
  originalFlyerUrl: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_19.42.31_a52be956.jpeg',
  heroMainImage: '/src/assets/images/ulili_hero_braids_1793213132640.jpg',
  workingHours: [
    { days: 'Segunda a Sábado', hours: '09:00 - 19:30' },
    { days: 'Domingo', hours: '10:00 - 17:00 (Com agendamento prévio)' }
  ]
};

export const SALON_PILLARS: SalonPillar[] = [
  {
    id: '1',
    title: 'Tranças Tradicionais',
    subtitle: 'De Raiz, Box Braids, Nagô e Clássicas',
    iconName: 'Crown',
    description: 'Técnicas de trançado ancestrais e perfeitas. Divisões simétricas e precisas que protegem e valorizam o crescimento natural dos seus fios.'
  },
  {
    id: '2',
    title: 'Tranças Modernas',
    subtitle: 'Boho Braids, Goddess, Fulani & Trend Styles',
    iconName: 'Sparkles',
    description: 'Estilos contemporâneos combinando mechas cacheadas, acessórios dourados e designs orgânicos de alta tendência.'
  },
  {
    id: '3',
    title: 'Com Alongamento',
    subtitle: 'Cabelo Sintético Premium ou Natural',
    iconName: 'Feather',
    description: 'Adicione comprimento e volume com materiais ultraleves e hipoalergênicos que não pesam na raiz nem sensibilizam o couro cabeludo.'
  },
  {
    id: '4',
    title: 'Acabamento Impecável',
    subtitle: 'Modelagem de Baby Hair e Selagem Térmica',
    iconName: 'Scissors',
    description: 'Finalização profissional rigorosa com pontas alinhadas, baby hair estilizado e pomada modeladora de fixação limpa.'
  },
  {
    id: '5',
    title: 'Higiene e Mais Segurança',
    subtitle: 'Biossegurança & Materiais Esterilizados',
    iconName: 'ShieldCheck',
    description: 'Ambiente climatizado, materiais desinfetados individualmente para cada cliente e protocolo sanitário completo.'
  },
  {
    id: '6',
    title: 'Diversos Estilos & Acabamentos',
    subtitle: 'Personalização Total de Fios e Acessórios',
    iconName: 'Gem',
    description: 'Personalize o tom, o comprimento, a espessura e os adereços (anéis dourados, fios de ouro, borboletas, missangas).'
  }
];

export const BRAID_STYLES: BraidStyle[] = [
  {
    id: 'fulani-royal',
    name: 'Tranças Fulani de Luxo',
    category: 'modernas',
    description: 'Design tradicional Fulani com trança central, tranças laterais invertidas, adornadas com anéis e missangas douradas e baby hair perfeitamente desenhado.',
    image: '/src/assets/images/ulili_hero_braids_1793213132640.jpg',
    duration: '4h - 5h',
    priceEstimate: 'A partir de 350 MAD',
    recommendedHairType: 'Todos os tipos de cabelo',
    maintenanceWeeks: '6 a 8 semanas',
    popularWithExtensions: true,
    features: ['Inclui acessórios dourados', 'Com alongamento', 'Baby hair estilizado', 'Design autoral']
  },
  {
    id: 'boho-goddess',
    name: 'Boho Goddess Braids',
    category: 'modernas',
    description: 'A combinação perfeita de tranças finas com mechas onduladas soltas ao longo de todo o comprimento. Estilo leve, volumoso e super praiano.',
    image: '/src/assets/images/ulili_boho_goddess_1793213132594.jpg',
    duration: '5h - 6h',
    priceEstimate: 'A partir de 420 MAD',
    recommendedHairType: 'Crespos e Cacheados (3A a 4C)',
    maintenanceWeeks: '6 a 8 semanas',
    popularWithExtensions: true,
    features: ['Mechas cacheadas orgânicas', 'Super leve', 'Visual praiano/chic', 'Excelente durabilidade']
  },
  {
    id: 'box-braids-alongamento',
    name: 'Box Braids Tradicionais com Alongamento',
    category: 'tradicionais',
    description: 'Quadrados geométricos impecáveis com fibra sintética de alta densidade. Pode ser estilizado em coques, rabos de cavalo e penteados diversos.',
    image: '/src/assets/images/ulili_box_braids_1793213132698.jpg',
    duration: '4h - 6h',
    priceEstimate: 'A partir de 380 MAD',
    recommendedHairType: 'Todos os tipos de fios',
    maintenanceWeeks: '8 a 10 semanas',
    popularWithExtensions: true,
    features: ['Divisões em High-Definition', 'Resistente à água', 'Opções de borboletas douradas', 'Comprimento até a cintura']
  },
  {
    id: 'nago-ponytail-gold',
    name: 'Trança Nagô com Rabo de Cavalo VIP',
    category: 'tradicionais',
    description: 'Tranças rasteiras em padrões geométricos convergindo em um rabo de cavalo elevado e imponente com adereços dourados.',
    image: '/src/assets/images/ulili_ponytail_braids_1793213133411.jpg',
    duration: '2.5h - 3.5h',
    priceEstimate: 'A partir de 280 MAD',
    recommendedHairType: 'Cabelos curtos a médios',
    maintenanceWeeks: '4 a 6 semanas',
    popularWithExtensions: true,
    features: ['Visual elegante para eventos', 'Execução rápida', 'Firmeza e conforto', 'Fácil higienização']
  },
  {
    id: 'knotless-braids',
    name: 'Knotless Braids (Tranças Sem Nó)',
    category: 'alongamento',
    description: 'Tranças sem nó na raiz, proporcionando zero dor de tração e caimento 100% natural desde o primeiro dia. Leveza absoluta.',
    image: '/src/assets/images/ulili_box_braids_1793213132698.jpg',
    duration: '4.5h - 6h',
    priceEstimate: 'A partir de 400 MAD',
    recommendedHairType: 'Couro cabeludo sensível',
    maintenanceWeeks: '6 a 8 semanas',
    popularWithExtensions: true,
    features: ['Zero dor na raiz', 'Movimento natural 360°', 'Ideal para couro sensível', 'Alongamento ultraleve']
  },
  {
    id: 'nago-desenhada',
    name: 'Nagô Artística & Desenhos Geométricos',
    category: 'tradicionais',
    description: 'Tranças rasteiras desenhadas com linhas onduladas, corações ou zigue-zague personalizado. Arte pura em tranças.',
    image: '/public/assets/aistudio/WhatsApp_Image_2026-10-28_at_19.42.31_a52be956.jpeg',
    duration: '2h - 3h',
    priceEstimate: 'A partir de 250 MAD',
    recommendedHairType: 'Cabelos curtos ou médios',
    maintenanceWeeks: '3 a 5 semanas',
    popularWithExtensions: false,
    features: ['Designs exclusivos personalizados', 'Excelente para o dia a dia', 'Opções com/sem extensão', 'Secagem rápida']
  }
];

export const EXTENSION_OPTIONS: HairExtensionOption[] = [
  {
    id: 'sintetico-jumbo',
    name: 'Fibra Sintética Jumbo Premium',
    type: 'Sintético Premium',
    description: 'Fibras macias de alta resistência ao calor, selagem perfeita em água quente e acabamento aveludado.',
    durability: '2 a 3 meses',
    priceModifier: 1.0
  },
  {
    id: 'cabelo-organico',
    name: 'Fibra Orgânica Super Soft',
    type: 'Orgânico',
    description: 'Textura extremamente parecida com cabelo humano, super leve, macia e com brilho natural sedoso.',
    durability: '2 a 3 meses',
    priceModifier: 1.25
  },
  {
    id: 'cabelo-natural-humano',
    name: 'Cabelo Humano Natural 100%',
    type: 'Cabelo Natural',
    description: 'Fios 100% humanos selecionados para acabamento de altíssimo padrão, toque idêntico ao natural e durabilidade estendida.',
    durability: '6 meses a 1 ano (reutilizável)',
    priceModifier: 1.8
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    clientName: 'Amina Alami',
    styleDone: 'Boho Goddess Braids',
    rating: 5,
    comment: 'A atenção ao detalhe no Ulili Tranças é impressionante! O acabamento do baby hair ficou perfeito e não senti dor nenhuma. O salão em El Kheir é muito acolhedor.',
    date: 'Ontem',
    location: 'El Kheir'
  },
  {
    id: 'rev-2',
    clientName: 'Fatima Zohra',
    styleDone: 'Fulani de Luxo com Acessórios',
    rating: 5,
    comment: 'Minhas tranças duraram mais de 2 meses intactas. Os anéis dourados e as miçangas deram um toque real. Super recomendo a toda a gente!',
    date: 'Há 3 dias',
    location: 'El Kheir'
  },
  {
    id: 'rev-3',
    clientName: 'Khadija B.',
    styleDone: 'Box Braids com Alongamento Natural',
    rating: 5,
    comment: 'Atendimento nota 10! A higiene com os materiais é impecável. Agendei pelo WhatsApp rapidamente e fui atendida exatamente no horário.',
    date: 'Há 1 semana',
    location: 'El Kheir'
  }
];

export const CARE_TIPS: CareTip[] = [
  {
    title: 'Higienização do Couro Cabeludo',
    subtitle: 'Lave suavemente sem esfregar as tranças',
    icon: 'Droplets',
    points: [
      'Dilua o xampu neutro em água antes de aplicar na raiz.',
      'Massaje o couro cabeludo suavemente com as gemas dos dedos.',
      'Enxágue abundantemente com água morna para fria.'
    ]
  },
  {
    title: 'Proteção Noturna',
    subtitle: 'Touca ou fronha de cetim é fundamental',
    icon: 'Moon',
    points: [
      'Utilize touca de cetim todas as noites para evitar o atrito e o frizz.',
      'Evite dormir com as tranças úmidas para manter a higiene do couro cabeludo.',
      'Penteie as pontas cacheadas das Boho Braids com óleo leve.'
    ]
  },
  {
    title: 'Hidratação & Brilho',
    subtitle: 'Mantenha a raiz saudável e nutridas',
    icon: 'Sparkles',
    points: [
      'Alique tônico fortalecedor ou óleo vegetal leve no couro 2x por semana.',
      'Evite pomadas pesadas nas tranças já prontas.',
      'Aplique spray hidratante leve nas extensões orgânicas.'
    ]
  }
];

export const TIME_SLOTS = [
  '09:00', '10:30', '12:00', '14:00', '15:30', '17:00'
];

export const LENGTH_OPTIONS = [
  { id: 'curto', label: 'Médio / Ombros (approx. 40cm)', extraCost: 0 },
  { id: 'longo', label: 'Longo / Cintura (approx. 60cm)', extraCost: 50 },
  { id: 'extra-longo', label: 'Extra Longo / Quadril (approx. 80cm)', extraCost: 100 }
];

export const ACCESSORY_OPTIONS = [
  'Anéis Dourados Metálicos',
  'Presilhas de Borboleta Dourada',
  'Fios de Ouro Passados',
  'Missangas Tradicionais',
  'Conchas Búzios Naturais'
];
