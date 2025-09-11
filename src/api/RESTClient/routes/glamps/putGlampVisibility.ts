import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampVisibility } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює видимість Ґлемпа.
 *
 * @function putGlampVisibility
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampVisibility} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TGlampVisibility>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.putVisibility({ glamp_id: 1 }, { is_hidden: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlampVisibility {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampVisibility>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampVisibility;
}

export type TError = TAPIPutGlampVisibility['TError'];
export type TSuccess = TAPIPutGlampVisibility['TSuccess'];
export type TParams = TAPIPutGlampVisibility['TParams'];
export type TPayload = TAPIPutGlampVisibility['TPayload'];

export async function putGlampVisibility(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/hidden/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampVisibility,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
