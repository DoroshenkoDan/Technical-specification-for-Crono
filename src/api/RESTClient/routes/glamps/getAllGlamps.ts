import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import {
  TListMeta,
  TResponseError,
  TResponseSuccess,
} from 'api/RESTClient/types';
import { TListGlamps } from 'api/RESTClient/types/TGlamps';
import { TGlamp } from 'types/TGlamp';

/**
 * Отримує список усіх Ґлемпів із сервера.
 *
 * @function getAllGlamps
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TListMeta<TGlamp>} [params] - Параметри для запиту, такі як `page`, `pageSize`, `sorting`, `filters`.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListGlamps>>} - Об'єкт із списком Ґлемпів, що містить `count`, `next`, `previous`, `page`, `pageSize`, `results`.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.getAll();
 *   console.log(data.results);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllGlamps {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListGlamps>;
}
export type TError = TAPIGetAllGlamps['TError'];
export type TSuccess = TAPIGetAllGlamps['TSuccess'];

export async function getAllGlamps(
  this: BaseRESTClient,
  params?: TListMeta<TGlamp>,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/glamps/', {
      ...config,
      signal,
      params,
      paramsSerializer: {
        indexes: null,
      },
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TListGlamps,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
