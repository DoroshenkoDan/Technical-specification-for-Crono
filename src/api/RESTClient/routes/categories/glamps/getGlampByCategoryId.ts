import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlamp } from 'types/TGlamp';

/**
 * Отримує дані за його ідентифікатором.
 *
 * @function getGlampByCategoryId
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} category_id - Унікальний ідентифікатор.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TGlamp>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.glamps.getById({ category_id: 17, glamp_id: 219 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetGlampByCategoryId {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlamp>;
  TParams: {
    category_id: number;
    glamp_id: number;
  };
}

export type TError = TAPIGetGlampByCategoryId['TError'];
export type TSuccess = TAPIGetGlampByCategoryId['TSuccess'];
export type TParams = TAPIGetGlampByCategoryId['TParams'];

export async function getGlampByCategoryId(
  this: BaseRESTClient,
  { category_id, glamp_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/categories/${category_id}/glamps/${glamp_id}/`,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlamp,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
