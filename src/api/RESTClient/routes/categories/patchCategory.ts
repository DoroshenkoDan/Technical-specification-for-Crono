import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateCategoryPartial } from 'api/RESTClient/types/TCategories';
import { TCategory } from 'types/TCategory';

/**
 * Оновлює частину даних.
 *
 * @function patchCategory
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TUpdateCategoryPartial} payload - Об'єкт з оновленими даними.
 * @param {number} category_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TCategory>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.patch({ category_id: 1 }, { name: 'string' });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchCategory {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TCategory>;
  TParams: {
    category_id: number;
  };
  TPayload: TUpdateCategoryPartial;
}

export type TError = TAPIPatchCategory['TError'];
export type TSuccess = TAPIPatchCategory['TSuccess'];
export type TParams = TAPIPatchCategory['TParams'];
export type TPayload = TAPIPatchCategory['TPayload'];

export async function patchCategory(
  this: BaseRESTClient,
  { category_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
