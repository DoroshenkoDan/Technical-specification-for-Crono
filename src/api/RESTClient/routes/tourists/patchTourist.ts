import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateTouristPartial } from 'api/RESTClient/types/TTourists';
import { TTourist } from 'types/TTourist';

/**
 * Оновлює частину даних туриста.
 *
 * @function patchTourist
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} tourist_id - Унікальний ідентифікатор туриста.
 * @param {TUpdateTouristPartial} payload - Об'єкт з оновленими даними туриста.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TTourist>>} - Оновлені дані туриста.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.tourists.patch({ tourist_id: 75 }, { first_name: 'John', last_name: 'Doe' });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchTourist {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TTourist>;
  TParams: {
    tourist_id: number;
  };
  TPayload: TUpdateTouristPartial;
}

export type TError = TAPIPatchTourist['TError'];
export type TSuccess = TAPIPatchTourist['TSuccess'];
export type TParams = TAPIPatchTourist['TParams'];
export type TPayload = TAPIPatchTourist['TPayload'];

export async function patchTourist(
  this: BaseRESTClient,
  { tourist_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/tourists/${tourist_id}/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TTourist,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
