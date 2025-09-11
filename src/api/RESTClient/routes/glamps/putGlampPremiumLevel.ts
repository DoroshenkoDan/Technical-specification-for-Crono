import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampPremiumLevel } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює рівнь преміум-статусу Ґлемпа.
 *
 * @function putGlampPremiumLevel
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampPremiumLevel} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TGlampPremiumLevel>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.putPremiumLevel({ glamp_id: 1 }, { premium_level: 0 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlampPremiumLevel {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampPremiumLevel>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampPremiumLevel;
}

export type TError = TAPIPutGlampPremiumLevel['TError'];
export type TSuccess = TAPIPutGlampPremiumLevel['TSuccess'];
export type TParams = TAPIPutGlampPremiumLevel['TParams'];
export type TPayload = TAPIPutGlampPremiumLevel['TPayload'];

export async function putGlampPremiumLevel(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/premium_level/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampPremiumLevel,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
