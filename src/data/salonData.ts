import { BraidStyle, SalonPillar, HairExtensionOption, ReviewItem, CareTip } from '../types';

export const SALON_INFO = {
  name: 'Ulili Tranças',
  tagline: 'Beleza, estilo e autoestima em cada trança!',
  subtagline: 'CUIDANDO DO SEU CABELO, REALÇANDO A SUA BELEZA!',
  location: 'El Kheir',
  fullLocation: 'El Kheir, Salão VIP Ulili Tranças',
  phone: '+212 719 684 150',
  whatsappRaw: '212719684150',
  originalFlyerUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200',
  heroMainImage: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=1200',
  workingHours: [
    { days: 'Segunda a Sábado', hours: '09:00 - 19:30' },
    { days: 'Domingo', hours: '10:00 - 17:00 (Com agendamento prévio)' }
  ]
};

/* Exact 6 items verbatim from the flyer */
export const SALON_PILLARS: SalonPillar[] = [
  {
    id: '1',
    title: 'Tranças Tradicionais',
    subtitle: 'de raiz, box braids, nagô, etc.',
    iconName: 'Crown',
    description: 'Técnicas de trançado ancestrais e impecáveis. Divisões simétricas e perfeitas que protegem e valorizam a saúde dos seus fios.'
  },
  {
    id: '2',
    title: 'Tranças Modernas',
    subtitle: 'boho, goddess, fulani, etc.',
    iconName: 'Sparkles',
    description: 'Estilos contemporâneos combinando mechas cacheadas, adereços dourados e penteados de alta tendência para você brilhar.'
  },
  {
    id: '3',
    title: 'Com Alongamento',
    subtitle: 'cabelo sintético ou natural',
    iconName: 'Feather',
    description: 'Adicione comprimento e volume com fibras ultraleves que garantem movimento natural e zero tração dolorosa no couro cabeludo.'
  },
  {
    id: '4',
    title: 'Acabamento Impecável',
    subtitle: 'Modelagem de baby hair & selagem perfeita',
    iconName: 'Scissors',
    description: 'Finalização profissional minuciosa com baby hair estilizado, pontas seladas e alinhamento milimétrico de cada trança.'
  },
  {
    id: '5',
    title: 'Higiene e Mais Segurança',
    subtitle: 'Biossegurança total & materiais higienizados',
    iconName: 'ShieldCheck',
    description: 'Ambiente preparado, materiais desinfetados para cada cliente e protocolo de biossegurança rigoroso do início ao fim.'
  },
  {
    id: '6',
    title: 'Diversos Estilos e Acabamentos',
    subtitle: 'Anéis, miçangas, borboletas & fios dourados',
    iconName: 'Gem',
    description: 'Personalização completa com adereços dourados, miçangas tradicionais, presilhas e acabamentos sob medida para a sua beleza.'
  }
];

/* Expanded Catalog featuring Black women showcasing all braid styles matching the flyer photos */
export const BRAID_STYLES: BraidStyle[] = [
  {
    id: 'fulani-royal',
    name: 'Tranças Fulani com Acessórios Dourados',
    category: 'modernas',
    description: 'Estilo autêntico Fulani com trança central, tranças laterais em padrão geométrico, adereços dourados, miçangas e baby hair estilizado.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=1200',
    duration: '4h - 5h',
    priceEstimate: 'A partir de 350 MAD',
    recommendedHairType: 'Todos os tipos de cabelo',
    maintenanceWeeks: '6 a 8 semanas',
    popularWithExtensions: true,
    features: ['Anéis e anéis dourados', 'Com alongamento', 'Baby hair estilizado', 'Padrão Fulani autoral']
  },
  {
    id: 'boho-goddess',
    name: 'Boho Goddess Braids (Tranças Modernas)',
    category: 'modernas',
    description: 'Combinação perfeita de tranças finas com mechas cacheadas soltas em todo o comprimento. Leveza, volume natural e movimento sem igual.',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=1200',
    duration: '5h - 6h',
    priceEstimate: 'A partir de 420 MAD',
    recommendedHairType: 'Crespos e Cacheados (3A a 4C)',
    maintenanceWeeks: '6 a 8 semanas',
    popularWithExtensions: true,
    features: ['Mechas cacheadas macias', 'Sensação ultraleve', 'Visual moderno e chique', 'Alta durabilidade']
  },
  {
    id: 'nago-ponytail-gold',
    name: 'Rabo de Cavalo com Tranças Nagô & Presilhas',
    category: 'tradicionais',
    description: 'Nagô feed-in rasteira desenhada na cabeça culminando em um rabo de cavalo alto e majestoso adornado com presilhas e anéis dourados.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1200',
    duration: '2.5h - 3.5h',
    priceEstimate: 'A partir de 280 MAD',
    recommendedHairType: 'Cabelos curtos a médios',
    maintenanceWeeks: '4 a 6 semanas',
    popularWithExtensions: true,
    features: ['Penteado imponente para eventos', 'Presilhas metálicas douradas', 'Firmeza e conforto', 'Fácil manutenção']
  },
  {
    id: 'box-braids-beads',
    name: 'Box Braids com Miçangas & Anéis Dourados',
    category: 'tradicionais',
    description: 'Box braids tradicionais divididas em quadrados geométricos perfeitos, com alongamento e miçangas/anéis distribuídos ao longo das tranças.',
    image: 'https://images.unsplash.com/photo-1584297091622-af8e5ad1f6a1?auto=format&fit=crop&q=80&w=1200',
    duration: '4h - 6h',
    priceEstimate: 'A partir de 380 MAD',
    recommendedHairType: 'Todos os tipos de fios',
    maintenanceWeeks: '8 a 10 semanas',
    popularWithExtensions: true,
    features: ['Quadrados simétricos HD', 'Resistente à água', 'Comprimento personalizado', 'Acabamento duradouro']
  },
  {
    id: 'knotless-braids-natural',
    name: 'Knotless Braids (Tranças Sem Nó)',
    category: 'alongamento',
    description: 'Tranças sem nó na raiz para zero dor de tração, caimento 100% leve e movimento natural desde o primeiro dia de trançado.',
    image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&q=80&w=1200',
    duration: '4.5h - 6h',
    priceEstimate: 'A partir de 400 MAD',
    recommendedHairType: 'Couro cabeludo sensível',
    maintenanceWeeks: '6 a 8 semanas',
    popularWithExtensions: true,
    features: ['Zero dor na raiz', 'Flexibilidade total para coques', 'Proteção do couro cabeludo', 'Fios sintéticos premium']
  },
  {
    id: 'nago-desenhada-arte',
    name: 'Trança Nagô de Raiz com Desenho Geométrico',
    category: 'tradicionais',
    description: 'Tranças de raiz trançadas rente ao couro cabeludo em desenhos exclusivos de curvas e geométricos com acabamento impecável.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1200',
    duration: '2h - 3h',
    priceEstimate: 'A partir de 250 MAD',
    recommendedHairType: 'Cabelos curtos e médios',
    maintenanceWeeks: '3 a 5 semanas',
    popularWithExtensions: false,
    features: ['Desenhos artísticos únicos', 'Leveza imediata', 'Opção com/sem extensão', 'Secagem rápida']
  },
  {
    id: 'butterfly-ponytail',
    name: 'Trança Nagô com Borboletas Douradas',
    category: 'modernas',
    description: 'Visual romântico e glamouroso com tranças de raiz e borboletas metálicas douradas aplicadas ao longo das tranças.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200',
    duration: '3h - 4h',
    priceEstimate: 'A partir de 320 MAD',
    recommendedHairType: 'Todos os tipos de cabelo',
    maintenanceWeeks: '5 a 7 semanas',
    popularWithExtensions: true,
    features: ['Borboletas douradas', 'Design encantador', 'Modelagem de baby hair', 'Extensão de qualidade']
  }
];

export const EXTENSION_OPTIONS: HairExtensionOption[] = [
  {
    id: 'sintetico-jumbo',
    name: 'Cabelo Sintético Jumbo Premium',
    type: 'Sintético Premium',
    description: 'Fibras macias de alta resistência ao calor, selagem perfeita em água quente e toque suave.',
    durability: '2 a 3 meses',
    priceModifier: 1.0
  },
  {
    id: 'cabelo-organico',
    name: 'Fibra Orgânica Super Soft',
    type: 'Orgânico',
    description: 'Textura ultraleve parecida com cabelo humano, caimento fluido e brilho natural.',
    durability: '2 a 3 meses',
    priceModifier: 1.25
  },
  {
    id: 'cabelo-natural-humano',
    name: 'Cabelo Natural 100% Humano',
    type: 'Cabelo Natural',
    description: 'Fios 100% humanos selecionados para acabamento de altíssimo padrão e durabilidade prolongada.',
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
    comment: 'Minhas tranças duraram mais de 2 meses intactas. Os anéis dourados e as miçangas deram um toque real. Super recomendo!',
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
    subtitle: 'Lave suavemente mantendo a higiene',
    icon: 'Droplets',
    points: [
      'Dilua o xampu neutro em água antes de aplicar na raiz.',
      'Massaje o couro cabeludo suavemente com a ponta dos dedos.',
      'Enxágue bem com água morna para fria.'
    ]
  },
  {
    title: 'Proteção Noturna',
    subtitle: 'Touca ou fronha de cetim é fundamental',
    icon: 'Moon',
    points: [
      'Utilize touca de cetim para evitar atrito e frizz nas tranças.',
      'Evite dormir com as tranças molhadas.',
      'Penteie delicadamente as pontas cacheadas das Boho Braids.'
    ]
  },
  {
    title: 'Hidratação & Brilho',
    subtitle: 'Mantenha a raiz saudável e nutrida',
    icon: 'Sparkles',
    points: [
      'Aplique tônico fortalecedor ou óleo vegetal leve na raiz 2x por semana.',
      'Evite pomadas muito pesadas nas tranças prontas.',
      'Mantenha as pontas das extensões hidratadas.'
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
