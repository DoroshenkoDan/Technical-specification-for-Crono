import { TCredentials } from './TUsers';

import { TTourist } from 'types/TTourist';

// 📌 Запит на реєстрацію туриста
export interface TRegisterTourist {
  user: TCredentials;
  first_name: string | null;
  last_name: string | null;
  first_name_ua: string | null;
  last_name_ua: string | null;
  birthday: string | null;
  phone: string | null;
  verification_method: number;
}

// 📌 Список туристів (з пагінацією)
export interface TListTourists {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TTourist[];
}

// Оновлення даних туриста
export type TUpdateTourist = Pick<
  TTourist,
  | 'first_name'
  | 'last_name'
  | 'first_name_ua'
  | 'last_name_ua'
  | 'birthday'
  | 'phone'
>;

// Часткове оновлення даних туриста
export type TUpdateTouristPartial = Partial<TUpdateTourist>;
