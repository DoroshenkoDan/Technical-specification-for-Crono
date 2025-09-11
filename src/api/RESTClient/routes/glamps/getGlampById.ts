import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlamp } from 'types/TGlamp';

/**
 * Отримує дані Ґлемпа за його ідентифікатором.
 *
 * @function getGlampById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} glamp_id - Унікальний ідентифікатор Ґлемпа.
 * @returns {Promise<TResponseSuccess<TGlamp>>} - Об'єкт успішної відповіді з даними Ґлемпа.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.getById({ glamp_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetGlampById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlamp>;
  TParams: {
    glamp_id: number;
  };
}

export type TError = TAPIGetGlampById['TError'];
export type TSuccess = TAPIGetGlampById['TSuccess'];
export type TParams = TAPIGetGlampById['TParams'];

export async function getGlampById(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(`/glamps/${glamp_id}/`, {
      ...config,
      signal,
    });
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
