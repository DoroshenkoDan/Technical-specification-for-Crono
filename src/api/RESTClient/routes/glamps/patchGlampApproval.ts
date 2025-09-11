import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampApproval } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює частину даних.
 *
 * @function patchGlampApproval
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TUpdatePartial} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TGlampApproval>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.patchApproved({ glamp_id: 1 }, { is_approved: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchGlampApproval {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampApproval>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampApproval;
}

export type TError = TAPIPatchGlampApproval['TError'];
export type TSuccess = TAPIPatchGlampApproval['TSuccess'];
export type TParams = TAPIPatchGlampApproval['TParams'];
export type TPayload = TAPIPatchGlampApproval['TPayload'];

export async function patchGlampApproval(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
