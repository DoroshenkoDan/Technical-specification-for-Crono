import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient.ts';
import { TListManagers } from 'api/RESTClient/types/TManagers';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types.ts';

/**
 * Отримує список усіх Менеджерів із сервера.
 *
 * @function getAllManagers
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListManagers>>} - Об'єкт успішної відповіді з даними Менеджерів.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.managers.getAll();
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllManagers {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListManagers>;
}

export type TError = TAPIGetAllManagers['TError'];
export type TSuccess = TAPIGetAllManagers['TSuccess'];

export async function getAllManagers(
  this: BaseRESTClient,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/managers/', {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TListManagers,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
