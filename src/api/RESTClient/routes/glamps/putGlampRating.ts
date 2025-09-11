import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampRating } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює рейтинг Ґлемпа.
 *
 * @function putGlampRating
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampRating} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TGlampRating>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.putRating({ glamp_id: 1 }, { rating: 5 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlampRating {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampRating>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampRating;
}

export type TError = TAPIPutGlampRating['TError'];
export type TSuccess = TAPIPutGlampRating['TSuccess'];
export type TParams = TAPIPutGlampRating['TParams'];
export type TPayload = TAPIPutGlampRating['TPayload'];

export async function putGlampRating(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/rating/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampRating,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
