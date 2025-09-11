import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Перевіряє дійсність токена авторизації.
 *
 * @function tokenVerify
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {string} token - JWT токен для перевірки.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<null>>} - Об'єкт успішної відповіді.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const token = client.api.AM.token;
 *   if (!token) return;
 *   const res = await client.api.auth.verify({ token: token.refresh });
 *   console.log('Успішно перевірений токен:', res);
 * } catch (error) {
 *   console.error('Помилка перевірки токена:', error);
 * }
 */

export interface TAPITokenVerify {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TPayload: {
    token: string;
  };
}

export type TError = TAPITokenVerify['TError'];
export type TSuccess = TAPITokenVerify['TSuccess'];
export type TPayload = TAPITokenVerify['TPayload'];

export async function tokenVerify(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>(
      '/auth/token/verify/',
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
