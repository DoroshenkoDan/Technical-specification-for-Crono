import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TRegisterAdministrator } from 'api/RESTClient/types/TAdministrators';
import { TAdministrator } from 'types/TAdministrator';

/**
 * Реєструє нового адміністратора в системі.
 *
 * @function registerAdministrator
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TRegisterAdministrator} payload - Об'єкт з даними адміністратора.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TAdministrator>>} - Об'єкт успішної відповіді з даними адміністратора.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.administrators.register({
 *   user: { email: 'test@example.com', password: '123456', confirm_password: '123456' },
 *   first_name: 'John',
 *   last_name: 'Doe',
 * });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIRegisterAdministrator {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TAdministrator>;
  TPayload: TRegisterAdministrator;
}

export type TError = TAPIRegisterAdministrator['TError'];
export type TSuccess = TAPIRegisterAdministrator['TSuccess'];
export type TPayload = TAPIRegisterAdministrator['TPayload'];

export async function registerAdministrator(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>(
      '/administrators/',
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TAdministrator,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
