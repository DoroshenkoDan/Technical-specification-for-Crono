import { TCredentials } from './TUsers';

import { TGlampOwner } from 'types/TGlampOwner';

// 📌 Запит на реєстрацію туриста
export interface TRegisterGlampOwner {
  user: TCredentials;
  first_name: string | null;
  last_name: string | null;
  first_name_ua: string | null;
  last_name_ua: string | null;
  phone: string | null;
  verification_method: number;
}

// 📌 Список туристів (з пагінацією)
export interface TListGlampOwners {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TGlampOwner[];
}

export type TUpdateGlampOwner = Pick<
  TGlampOwner,
  'first_name' | 'last_name' | 'first_name_ua' | 'last_name_ua' | 'phone'
>;

export type TUpdateGlampOwnerPartial = Partial<TUpdateGlampOwner>;
