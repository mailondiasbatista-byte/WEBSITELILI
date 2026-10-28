export type CategoryType = 'todas' | 'tradicionais' | 'modernas' | 'alongamento';

export interface BraidStyle {
  id: string;
  name: string;
  category: 'tradicionais' | 'modernas' | 'alongamento';
  description: string;
  image: string;
  duration: string;
  priceEstimate: string;
  recommendedHairType: string;
  maintenanceWeeks: string;
  popularWithExtensions: boolean;
  features: string[];
}

export interface SalonPillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
}

export interface HairExtensionOption {
  id: string;
  name: string;
  type: 'Sintético Premium' | 'Cabelo Natural' | 'Orgânico';
  description: string;
  durability: string;
  priceModifier: number; // percentage or multiplier
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  category: string;
  extensionType: string;
  hairLength: string;
  colorPreference: string;
  accessories: string[];
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  notes: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  styleDone: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

export interface CareTip {
  title: string;
  subtitle: string;
  icon: string;
  points: string[];
}
