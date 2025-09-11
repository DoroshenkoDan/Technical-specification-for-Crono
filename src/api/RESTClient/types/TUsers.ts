import { TUser } from 'types/TUser';

// 📌 Список користувачів (з пагінацією)
export interface TListUsers {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TUser[];
}

// 📌 Запит на скидання пароля користувача
export type TEmailUser = Pick<TCredentials, 'email'>;

// 📌 Запит на підтвердження пароля користувача
export interface TPasswordResetConfirm {
  new_password: string;
  confirm_password: string;
  token: string;
  uidb64: string;
}

// 📌 Дані для реєстрації та входу
export interface TCredentials {
  email: string;
  password: string;
  confirm_password?: string;
}
