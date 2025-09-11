import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampVerification } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює верифікацію Ґлемпа.
 *
 * @function putGlampVerification
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampVerification} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TGlampVerification>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.putVerified({ glamp_id: 1 }, { is_verified: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlampVerification {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampVerification>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampVerification;
}

export type TError = TAPIPutGlampVerification['TError'];
export type TSuccess = TAPIPutGlampVerification['TSuccess'];
export type TParams = TAPIPutGlampVerification['TParams'];
export type TPayload = TAPIPutGlampVerification['TPayload'];

export async function putGlampVerification(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/verified/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampVerification,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
