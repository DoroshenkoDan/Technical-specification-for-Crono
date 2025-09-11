import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Виконує вихід користувача з системи, відкликаючи refresh-токен.
 *
 * @function logout
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {string} refresh_token - Refresh-токен, який потрібно відкликати.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<null>>} - Об'єкт успішної відповіді.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const token = client.api.AM.token;
 *   if (!token) return;
 *   const res = await client.api.auth.logout({ refresh_token: token.refresh });
 *   console.log('Успішно відкликаний токен:', res);
 * } catch (error) {
 *   console.error('Помилка відкликання:', error);
 * }
 */

export interface TAPILogout {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TPayload: {
    refresh_token: string;
  };
}

export type TError = TAPILogout['TError'];
export type TSuccess = TAPILogout['TSuccess'];
export type TPayload = TAPILogout['TPayload'];

export async function logout(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>(
      '/auth/logout/',
      payload,
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
