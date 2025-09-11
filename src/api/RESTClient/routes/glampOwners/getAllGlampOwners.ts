import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TListGlampOwners } from 'api/RESTClient/types/TGlampOwners';

/**
 * Отримує список усіх власників Ґлемпу із сервера.
 *
 * @function getAllGlampOwners
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TListGlampOwners>>} - Об'єкт із списком власників Ґлемпу, що містить `count`, `next`, `previous`, `page`, `pageSize`, `results`.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glampOwners.getAll();
 *   console.log(data.results);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllGlampOwners {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListGlampOwners>;
}

export type TError = TAPIGetAllGlampOwners['TError'];
export type TSuccess = TAPIGetAllGlampOwners['TSuccess'];

export async function getAllGlampOwners(
  this: BaseRESTClient,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/glamp-owners/', {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TListGlampOwners,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
