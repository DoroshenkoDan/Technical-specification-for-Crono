import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPasswordResetConfirm } from 'api/RESTClient/types/TUsers';

/**
 * Підтверджує скидання пароля, встановлюючи новий пароль користувача.
 *
 * @function passwordResetConfirm
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TPasswordResetConfirm} params - Об'єкт із новими паролями та токенами.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<null>>} - Функція завершується без значення, якщо запит успішний.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   await client.api.auth.passwordResetConfirm({
 *     new_password: 'newPass123',
 *     confirm_password: 'newPass123',
 *     token: 'token123',
 *     uidb64: 'uidb64value',
 *   });
 *   console.log('Пароль успішно змінено');
 * } catch (error) {
 *   console.error('Помилка при зміні паролю:', error);
 * }
 */

export interface TAPIPasswordResetConfirm {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: TPasswordResetConfirm;
}

export type TError = TAPIPasswordResetConfirm['TError'];
export type TSuccess = TAPIPasswordResetConfirm['TSuccess'];
export type TParams = TAPIPasswordResetConfirm['TParams'];

export async function passwordResetConfirm(
  this: BaseRESTClient,
  { new_password, confirm_password, token, uidb64 }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>(
      `/auth/password-reset-confirm/${uidb64}/${token}/`,
      { new_password, confirm_password },
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: null,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
