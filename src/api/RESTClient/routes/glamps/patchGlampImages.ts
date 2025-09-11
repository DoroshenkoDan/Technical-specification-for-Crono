import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampImagesPatch } from 'api/RESTClient/types/TGlamps';
import { TImages } from 'types/TGlamp';

/**
 * Оновлює частину даних.
 *
 * @function patchGlampImages
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TGlampImagesPatch} payload - Об'єкт з оновленими даними.
 * @param {number} glamp_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TImages>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glamps.patchImages({ glamp_id: 1 }, { image: '', uploaded_images: [''] });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchGlampImages {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TImages>;
  TParams: {
    glamp_id: number;
  };
  TPayload: TGlampImagesPatch;
}

export type TError = TAPIPatchGlampImages['TError'];
export type TSuccess = TAPIPatchGlampImages['TSuccess'];
export type TParams = TAPIPatchGlampImages['TParams'];
export type TPayload = TAPIPatchGlampImages['TPayload'];

export async function patchGlampImages(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
