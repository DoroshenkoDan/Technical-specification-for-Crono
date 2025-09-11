import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TRegisterManager } from 'api/RESTClient/types/TManagers';
import { TManager } from 'types/TManager';

/**
 * Реєструє нового менеджера в системі.
 *
 * @function registerManager
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TRegisterManager} payload - Об'єкт з даними менеджера.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TManager>>} - Об'єкт успішної відповіді з даними менеджера.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.managers.register({
 *   user: { email: 'test@example.com', password: '123456', confirm_password: '123456' },
 *   first_name: 'John',
 *   last_name: 'Doe',
 * });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIRegisterManager {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TManager>;
  TPayload: TRegisterManager;
}

export type TError = TAPIRegisterManager['TError'];
export type TSuccess = TAPIRegisterManager['TSuccess'];
export type TPayload = TAPIRegisterManager['TPayload'];

export async function registerManager(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>('/managers/', payload, {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TManager,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
