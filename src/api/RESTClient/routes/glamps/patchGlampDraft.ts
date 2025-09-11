import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampDraft } from 'api/RESTClient/types/TGlamps';

/**
 * Оновлює частину даних.
 *
 * @function patchGlampDraft
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampDraft} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TGlampDraft>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.patchDraft({ glamp_id: 1 }, { is_draft: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchGlampDraft {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampDraft>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampDraft;
}

export type TError = TAPIPatchGlampDraft['TError'];
export type TSuccess = TAPIPatchGlampDraft['TSuccess'];
export type TParams = TAPIPatchGlampDraft['TParams'];
export type TPayload = TAPIPatchGlampDraft['TPayload'];

export async function patchGlampDraft(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/glamps/${glamp_id}/draft/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampDraft,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
