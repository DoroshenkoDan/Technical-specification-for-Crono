import { TCredentials } from './TUsers';

import { TAdministrator } from 'types/TAdministrator';

// 📌 Запит на реєстрацію Адміністратора
export interface TRegisterAdministrator {
  user: TCredentials;
  first_name: string;
  last_name: string;
}

// 📌 Список Адміністраторів (з пагінацією)
export interface TListAdministrators {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TAdministrator[];
}

// Оновлення даних Адміністратора
export type TUpdateAdministrator = Pick<
  TAdministrator,
  'first_name' | 'last_name'
>;

// Часткове оновлення даних Адміністратора
export type TUpdateAdministratorPartial = Partial<TUpdateAdministrator>;
