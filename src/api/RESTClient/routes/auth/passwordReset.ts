import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TEmailUser } from 'api/RESTClient/types/TUsers';

/**
 * Ініціює процес скидання пароля, надсилаючи користувачеві лист із інструкціями.
 *
 * @function passwordReset
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TEmailUser} params - Об'єкт із email користувача.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TSuccess>} - Функція завершується без значення, якщо запит успішний.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const res = await client.api.auth.passwordReset({ email: 'example@mail.com' });
 *   console.log('Лист успішно відправлено на пошту', res);
 * } catch (error) {
 *   console.error('Помилка при відправці листа:', error);
 * }
 */

export interface TAPIPasswordReset {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TPayload: TEmailUser;
}

export type TError = TAPIPasswordReset['TError'];
export type TSuccess = TAPIPasswordReset['TSuccess'];
export type TPayload = TAPIPasswordReset['TPayload'];

export async function passwordReset(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>(
      '/auth/password-reset/',
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      statusCode: response.status,
      status: 'OK',
      data: null,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      statusCode: error.response?.status || 500,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
