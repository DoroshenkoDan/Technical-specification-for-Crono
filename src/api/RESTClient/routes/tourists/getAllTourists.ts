import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TListTourists } from 'api/RESTClient/types/TTourists';

/**
 * Отримує список усіх туристів із сервера.
 *
 * @function getAllTourists
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListTourists>>} - Об'єкт із списком туристів, що містить `count`, `next`, `previous`, `page`, `pageSize`, `results`.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.tourists.getAll();
 *   console.log(data.results);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllTourists {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListTourists>;
}

export type TError = TAPIGetAllTourists['TError'];
export type TSuccess = TAPIGetAllTourists['TSuccess'];

export async function getAllTourists(
  this: BaseRESTClient,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/tourists/', {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TListTourists,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
