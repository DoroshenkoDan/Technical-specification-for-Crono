import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TCategory } from 'types/TCategory';

/**
 * Отримує дані за його ідентифікатором.
 *
 * @function getCategoryById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} category_id - Унікальний ідентифікатор.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TCategory>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.getById({ category_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetCategoryById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TCategory>;
  TParams: {
    category_id: number;
  };
}

export type TError = TAPIGetCategoryById['TError'];
export type TSuccess = TAPIGetCategoryById['TSuccess'];
export type TParams = TAPIGetCategoryById['TParams'];

export async function getCategoryById(
  this: BaseRESTClient,
  { category_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/categories/${category_id}/`,
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
