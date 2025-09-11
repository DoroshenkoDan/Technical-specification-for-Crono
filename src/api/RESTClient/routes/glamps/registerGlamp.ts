import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampRequest } from 'api/RESTClient/types/TGlamps';
import { TGlamp } from 'types/TGlamp';

/**
 * Реєструє новий Ґлемп в системі.
 *
 * @function registerGlamp
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampRequest} params - Дані для реєстрації Ґлемпа.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TGlamp>>} - Об'єкт успішної відповіді з даними нового Ґлемпа.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.register({ category_id: number; glamp_type: number; ... });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIRegisterGlamp {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlamp>;
  TPayload: TGlampRequest;
}

export type TError = TAPIRegisterGlamp['TError'];
export type TSuccess = TAPIRegisterGlamp['TSuccess'];
export type TPayload = TAPIRegisterGlamp['TPayload'];

export async function registerGlamp(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>('/glamps/', payload, {
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
