import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TJWT } from 'api/types';

/**
 * Оновлює токен доступу за допомогою refresh-токена.
 *
 * @function tokenRefresh
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {string} refresh - Refresh-токен, який потрібно оновити.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TJWT>>} - Об'єкт успішної відповіді з новим токеном.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const token = client.api.AM.token;
 *   if (!token) return;
 *   const res = await client.api.auth.refresh({ refresh: token.refresh });
 *   console.log('Успішно оновлений токен:', res);
 * } catch (error) {
 *   console.error('Помилка оновлення токена:', error);
 * }
 */

export interface TAPIRefreshToken {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TJWT>;
  TPayload: {
    refresh: string;
  };
}

export type TError = TAPIRefreshToken['TError'];
export type TSuccess = TAPIRefreshToken['TSuccess'];
export type TPayload = TAPIRefreshToken['TPayload'];

export async function tokenRefresh(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>(
      '/auth/token/refresh/',
      payload,
      {
        ...config,
        signal,
      }
    );
    (this as any).AM.login(response.data);
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TJWT,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
