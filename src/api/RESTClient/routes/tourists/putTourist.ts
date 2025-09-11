import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateTourist } from 'api/RESTClient/types/TTourists';
import { TTourist } from 'types/TTourist';

/**
 * Оновлює дані туриста.
 *
 * @function putTourist
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} tourist_id - Унікальний ідентифікатор туриста.
 * @param {TUpdateTourist} payload - Об'єкт з оновленими даними туриста.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TTourist>>} - Оновлені дані туриста.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.tourists.put({ tourist_id: 75 }, {
 *     first_name: 'John',
 *     last_name: 'Doe',
 *     birthday: '1990-01-01',
 *     phone: '+123456789'
 *   });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutTourist {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TTourist>;
  TParams: {
    tourist_id: number;
  };
  TPayload: TUpdateTourist;
}

export type TError = TAPIPutTourist['TError'];
export type TSuccess = TAPIPutTourist['TSuccess'];
export type TParams = TAPIPutTourist['TParams'];
export type TPayload = TAPIPutTourist['TPayload'];

export async function putTourist(
  this: BaseRESTClient,
  { tourist_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
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
