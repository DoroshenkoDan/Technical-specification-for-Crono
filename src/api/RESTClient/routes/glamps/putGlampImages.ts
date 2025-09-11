import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampImagesPut } from 'api/RESTClient/types/TGlamps';
import { TImages } from 'types/TGlamp';

/**
 * Оновлює зображення Ґлемпа.
 *
 * @function putGlampImages
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampImagesPut} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TImages>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.putImages({ glamp_id: 1 }, { image: '', uploaded_images: [''] });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutApprovalGlamp {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TImages>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampImagesPut;
}

export type TError = TAPIPutApprovalGlamp['TError'];
export type TSuccess = TAPIPutApprovalGlamp['TSuccess'];
export type TParams = TAPIPutApprovalGlamp['TParams'];
export type TPayload = TAPIPutApprovalGlamp['TPayload'];

export async function putGlampImages(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamps/${glamp_id}/images/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TImages,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
