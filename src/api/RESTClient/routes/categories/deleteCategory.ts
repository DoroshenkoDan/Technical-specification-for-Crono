import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Видаляє дані за його ідентифікатором.
 *
 * @function deleteCategory
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} category_id - Унікальний ідентифікатор.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<null>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.delete({ category_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeleteCategory {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    category_id: number;
  };
}

export type TError = TAPIDeleteCategory['TError'];
export type TSuccess = TAPIDeleteCategory['TSuccess'];
export type TParams = TAPIDeleteCategory['TParams'];

export async function deleteCategory(
  this: BaseRESTClient,
  { category_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.delete<TSuccess>(
      `/categories/${category_id}/`,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: null,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
