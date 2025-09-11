import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampPriority } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює пріоритет Ґлемпа.
 *
 * @function putGlampPriority
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampPriority} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TGlampPriority>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.putPriority({ glamp_id: 1 }, { priority: 100 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlampPriority {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampPriority>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampPriority;
}

export type TError = TAPIPutGlampPriority['TError'];
export type TSuccess = TAPIPutGlampPriority['TSuccess'];
export type TParams = TAPIPutGlampPriority['TParams'];
export type TPayload = TAPIPutGlampPriority['TPayload'];

export async function putGlampPriority(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/priority/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampPriority,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
