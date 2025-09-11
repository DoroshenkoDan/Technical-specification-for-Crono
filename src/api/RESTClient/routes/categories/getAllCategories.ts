import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import {
  TListMeta,
  TResponseError,
  TResponseSuccess,
} from 'api/RESTClient/types';
import { TListCategories } from 'api/RESTClient/types/TCategories';
import { TCategory } from 'types/TCategory';

/**
 * Отримує список усіх категорій.
 *
 * @function getAllCategories
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TListMeta<TCategory>} [params] - Параметри для запиту, такі як `page`, `pageSize`, `sorting`, `filters`.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListCategories>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.getAll();
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllCategories {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListCategories>;
}

export type TError = TAPIGetAllCategories['TError'];
export type TSuccess = TAPIGetAllCategories['TSuccess'];

export async function getAllCategories(
  this: BaseRESTClient,
  params?: TListMeta<TCategory>,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/categories/', {
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
      data: response.data as unknown as TListCategories,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
