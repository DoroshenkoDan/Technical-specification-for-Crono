import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampApproval } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює схвалення Ґлемпа
 *
 * @function putGlampApproval
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampApproval} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TGlampApproval>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.putApproved({ glamp_id: 1 }, { is_approved: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlampApproval {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampApproval>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampApproval;
}

export type TError = TAPIPutGlampApproval['TError'];
export type TSuccess = TAPIPutGlampApproval['TSuccess'];
export type TParams = TAPIPutGlampApproval['TParams'];
export type TPayload = TAPIPutGlampApproval['TPayload'];

export async function putGlampApproval(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/approved/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampApproval,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
