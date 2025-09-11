import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TRegisterTourist } from 'api/RESTClient/types/TTourists';
import { TTourist } from 'types/TTourist';

/**
 * Реєструє нового туриста в системі.
 *
 * @function registerTourist
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TRegisterTourist} payload - Дані для реєстрації туриста.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TTourist>>} - Відповідь сервера з даними зареєстрованого туриста.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = await client.api.tourists.register({
 *     user: { email: 'test@example.com', password: '123456', confirm_password: '123456' },
 *     first_name: 'John',
 *     last_name: 'Doe',
 *     birthday: '1990-01-01',
 *     phone: '+123456789'
 *   });
 *   console.log(response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIRegisterTourist {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TTourist>;
  TPayload: TRegisterTourist;
}

export type TError = TAPIRegisterTourist['TError'];
export type TSuccess = TAPIRegisterTourist['TSuccess'];
export type TPayload = TAPIRegisterTourist['TPayload'];

export async function registerTourist(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>(
      '/tourists/register-tourist/',
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TTourist,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
