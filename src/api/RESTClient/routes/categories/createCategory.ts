import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TCreateCategory } from 'api/RESTClient/types/TCategories';
import { TCategory } from 'types/TCategory';

/**
 * Створює категорію Ґлемпа.
 *
 * @function createCategory
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TCreateCategory} payload - Дані для створення категорії.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TCategory>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.create({ name: 'string', slug: 'string', title: 'string', description: 'string', is_active: true, is_hidden: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetCategoryById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TCategory>;
  TPayload: TCreateCategory;
}

export type TError = TAPIGetCategoryById['TError'];
export type TSuccess = TAPIGetCategoryById['TSuccess'];
export type TPayload = TAPIGetCategoryById['TPayload'];

export async function createCategory(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>('/categories/', payload, {
      ...config,
      signal,
    });
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
