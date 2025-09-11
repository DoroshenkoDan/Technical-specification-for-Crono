import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampActivation } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює активацію Ґлемпа.
 *
 * @function putGlampActivation
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} glamp_id - Унікальний ідентифікатор Ґлемпа.
 * @param {TGlampActivation} params - Об'єкт з оновленими даними Ґлемпа.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TGlampActivation>>} - Оновлені дані Ґлемпа.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const activate = await client.api.glamps.putActivate({ glamp_id: 2 }, { is_active: true });
 *   console.log(activate);
 * } catch (error) {
 *   console.error(error);
 * }
 */
export interface TAPIPutGlampActivation {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampActivation>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampActivation;
}

export type TError = TAPIPutGlampActivation['TError'];
export type TSuccess = TAPIPutGlampActivation['TSuccess'];
export type TParams = TAPIPutGlampActivation['TParams'];
export type TPayload = TAPIPutGlampActivation['TPayload'];

export async function putGlampActivation(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/activate/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampActivation,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
