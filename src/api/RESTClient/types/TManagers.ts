import { TCredentials } from './TUsers';

import { TManager } from 'types/TManager';

// 📌 Запит на реєстрацію менеджера
export interface TRegisterManager {
  user: TCredentials;
  first_name: string;
  last_name: string;
}

// 📌 Список менеджерів (з пагінацією)
export interface TListManagers {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TManager[];
}

// Оновлення даних менеджера
export type TUpdateManager = Pick<TManager, 'first_name' | 'last_name'>;

// Часткове оновлення даних менеджера
export type TUpdateManagerPartial = Partial<TUpdateManager>;
