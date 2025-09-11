import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TListMeta } from 'api/RESTClient/types';
import { TListGlamps } from 'api/RESTClient/types/TGlamps';
import { TGlamp } from 'types/TGlamp';

/**
 * Отримує дані за його ідентифікатором.
 *
 * @function getAllGlampsByCategoryId
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TListMeta<TGlamp>} [params] - Параметри для запиту, такі як `page`, `pageSize`, `sorting`, `filters`.
 * @param {number} category_id - Унікальний ідентифікатор.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListGlamps>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.glamps.getAll({ category_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllGlampsByCategoryId {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListGlamps>;
  TParams: {
    category_id: number;
  };
}

export type TError = TAPIGetAllGlampsByCategoryId['TError'];
export type TSuccess = TAPIGetAllGlampsByCategoryId['TSuccess'];
export type TParams = TAPIGetAllGlampsByCategoryId['TParams'];

export async function getAllGlampsByCategoryId(
  this: BaseRESTClient,
  { category_id }: TParams,
  params?: TListMeta<TGlamp>,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/categories/${category_id}/glamps/`,
      {
        ...config,
        signal,
        params,
        paramsSerializer: {
          indexes: null,
        },
      }
    );
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
