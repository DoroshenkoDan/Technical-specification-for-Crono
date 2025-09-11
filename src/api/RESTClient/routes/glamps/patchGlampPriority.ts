import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampPriority } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює частину даних.
 *
 * @function patchGlampPriority
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
 *   const { data } = await client.api.glamps.patchPriority({ glamp_id: 1 }, { priority: 100 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchGlampPriority {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampPriority>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampPriority;
}

export type TError = TAPIPatchGlampPriority['TError'];
export type TSuccess = TAPIPatchGlampPriority['TSuccess'];
export type TParams = TAPIPatchGlampPriority['TParams'];
export type TPayload = TAPIPatchGlampPriority['TPayload'];

export async function patchGlampPriority(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
