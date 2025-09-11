import { TGlamp } from 'types/TGlamp';

// 📌 Запит на реєстрацію Ґлемпа
export interface TGlampRequest {
  category_id: number;
  glamp_type: number;
  name: string;
  capacity: number;
  status: number;
  description: string;
  street: string;
  number_of_bedrooms: number;
  number_of_beds: number;
  number_of_bathrooms: number;
  original_price: string;
  discount: number;
  uploaded_images: string[];
  image: string;
  slug: string;
  reviews: number;
  badge: string;
  building_number: string;
  apartment: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  heating_system: boolean;
  cooling_system: boolean;
  internet: boolean;
  laundry_services: boolean;
  tv: boolean;
  iron: boolean;
  workplace: boolean;
  pool: boolean;
  spa: boolean;
  jacuzzi: boolean;
  vat: boolean;
  sauna: boolean;
  fireplace: boolean;
  gazebo: boolean;
  terrace: boolean;
  barbecue_area: boolean;
  hammocks: boolean;
  garden_furniture: boolean;
  pets_farm: boolean;
  riding: boolean;
  hiking_walking: boolean;
  fishing: boolean;
  swimming: boolean;
  boating: boolean;
  alpine_skiing: boolean;
  meditation_yoga: boolean;
  sports_area: boolean;
  game_area: boolean;
  events_excursions: boolean;
  national_park: boolean;
  sea: boolean;
  lake: boolean;
  stream: boolean;
  waterfall: boolean;
  thermal_springs: boolean;
  mountains: boolean;
  salt_caves: boolean;
  beautiful_views: boolean;
  cot_for_babies: boolean;
  bathroom_in_room: boolean;
  kitchen_in_room: boolean;
  dining_area: boolean;
  microwave: boolean;
  plate: boolean;
  refrigerator: boolean;
  kitchen_on_territory: boolean;
  no_kitchen: boolean;
  breakfast_included: boolean;
  lunch_included: boolean;
  dinner_included: boolean;
  all_inclusive: boolean;
  room_service: boolean;
  bar: boolean;
  restaurant: boolean;
  instant_booking: boolean;
  reception_24: boolean;
  free_cancellation: boolean;
  allowed_with_animals: boolean;
  suitable_for_children: boolean;
  suitable_for_groups: boolean;
  can_order_transfer: boolean;
  car_charging_station: boolean;
  place_for_car: boolean;
  projector_and_screen: boolean;
  area_for_events: boolean;
  territory_under_protection: boolean;
  cloakroom: boolean;
  without_thresholds: boolean;
  no_ladder: boolean;
  bath_with_handrails: boolean;
  toilet_with_handrails: boolean;
  shower_chair: boolean;
  suitable_for_guests_in_wheelchairs: boolean;
  room_on_first_flor: boolean;
  zip_code: string;
  single_beds: number;
  double_beds: number;
  guests: number;
  checkin_time: string;
  checkout_time: string;
  smoking_allowed: boolean;
  parties_allowed: boolean;
  winter: boolean;
  spring: boolean;
  summer: boolean;
  autumn: boolean;
  earnings_owner: string;
  earnings_base_price: string;
  earnings_tourist_taxes: string;
  earnings_platform_fee: string;
  terms_agreed: boolean;
  title: string;
}

// 📌 Список Ґлемпів (з пагінацією)
export interface TListGlamps {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TGlamp[];
}

// 📌 Оновлення даних Ґлемпа
export type TGlampUpdate = Omit<
  TGlamp,
  'id' | 'owner' | 'category' | 'created_at' | 'updated_at'
>;

// 📌 Часткове оновлення даних Ґлемпа
export type TGlampPartialUpdate = Partial<TGlampUpdate>;

// 📌 Запит на зміну статусу активності Ґлемпа
export type TGlampActivation = Pick<TGlamp, 'is_active'>;

// 📌 Запит на схвалення Ґлемпа модератором
export type TGlampApproval = Pick<TGlamp, 'is_approved'>;

// 📌 Запит на збереження Ґлемпа як чернетки
export type TGlampDraft = Pick<TGlamp, 'is_draft'>;

// 📌 Запит на приховування Ґлемпа з каталогу
export type TGlampVisibility = Pick<TGlamp, 'is_hidden'>;

// 📌 Запит на оновлення зображень Ґлемпа
export type TGlampImagesPut = Pick<TGlampRequest, 'image' | 'uploaded_images'>;

// 📌 Запит на часткове оновлення зображень Ґлемпа
export type TGlampImagesPatch = Partial<
  Pick<TGlampRequest, 'image' | 'uploaded_images'>
>;

// 📌 Запит на зміну рівня преміум-статусу Ґлемпа
export type TGlampPremiumLevel = Pick<TGlamp, 'premium_level'>;

// 📌 Запит на зміну пріоритетності відображення Ґлемпа
export type TGlampPriority = Pick<TGlamp, 'priority'>;

// 📌 Запит на оновлення рейтингу Ґлемпа
export type TGlampRating = Pick<TGlamp, 'rating'>;

// 📌 Запит на верифікацію Ґлемпа
export type TGlampVerification = Pick<TGlamp, 'is_verified'>;
