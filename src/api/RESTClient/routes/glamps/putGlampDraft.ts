import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampDraft } from 'api/RESTClient/types/TGlamps';

/**
 * Збереження Ґлемпа як чернетки.
 *
 * @function putGlampDraft
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
 *   const { data } = await client.api.glamps.putDraft({ glamp_id: 1 }, { is_draft: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlampDraft {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampDraft>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampDraft;
}

export type TError = TAPIPutGlampDraft['TError'];
export type TSuccess = TAPIPutGlampDraft['TSuccess'];
export type TParams = TAPIPutGlampDraft['TParams'];
export type TPayload = TAPIPutGlampDraft['TPayload'];

export async function putGlampDraft(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
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
