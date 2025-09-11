import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampUpdate } from 'api/RESTClient/types/TGlamps';
import { TGlamp } from 'types/TGlamp';

/**
 * Оновлює дані Ґлемпа.
 *
 * @function putGlamp
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} glamp_id - Унікальний ідентифікатор Ґлемпа.
 * @param {TGlampUpdate} params - Об'єкт з оновленими даними Ґлемпа.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TGlamp>>} - Оновлені дані Ґлемпа.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.put({ glamp_id: 2 }, { category_id: 1, glamp_type: 2, name: 'Luxury Glamp', capacity: 4, ....All });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlamp {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlamp>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampUpdate;
}

export type TError = TAPIPutGlamp['TError'];
export type TSuccess = TAPIPutGlamp['TSuccess'];
export type TParams = TAPIPutGlamp['TParams'];
export type TPayload = TAPIPutGlamp['TPayload'];

export async function putGlamp(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/`,
      payload,
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
