import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampPartialUpdate } from 'api/RESTClient/types/TGlamps';
import { TGlamp } from 'types/TGlamp';

/**
 * Оновлює частину даних Ґлемпа.
 *
 * @function patchGlamp
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
 *   const updatedGlamp = await client.api.glamps.patch({ glamp_id: 2 }, {
 *     category_id: 2,
 *     glamp_type: 1,
 *   });
 *   console.log(updatedGlamp.data);
 * } catch (error) {
 *   console.error(error);
 * }
 */
export interface TAPIPatchGlamp {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlamp>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampPartialUpdate;
}

export type TError = TAPIPatchGlamp['TError'];
export type TSuccess = TAPIPatchGlamp['TSuccess'];
export type TParams = TAPIPatchGlamp['TParams'];
export type TPayload = TAPIPatchGlamp['TPayload'];

export async function patchGlamp(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
