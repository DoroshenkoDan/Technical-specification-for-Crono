import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateCategory } from 'api/RESTClient/types/TCategories';
import { TCategory } from 'types/TCategory';

/**
 * Оновлює дані.
 *
 * @function putCategory
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TUpdateCategory} payload - Об'єкт з оновленими даними.
 * @param {number} category_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TCategory>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.put({ category_id: 1 }, { name: 'string', slug: 'string', title: 'string', description: 'string', is_active: true, is_hidden: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutCategory {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TCategory>;
  TParams: {
    category_id: number;
  };
  TPayload: TUpdateCategory;
}

export type TError = TAPIPutCategory['TError'];
export type TSuccess = TAPIPutCategory['TSuccess'];
export type TParams = TAPIPutCategory['TParams'];
export type TPayload = TAPIPutCategory['TPayload'];

export async function putCategory(
  this: BaseRESTClient,
  { category_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/categories/${category_id}/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TCategory,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
