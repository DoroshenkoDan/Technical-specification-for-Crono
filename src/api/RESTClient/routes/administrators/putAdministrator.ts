import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateAdministrator } from 'api/RESTClient/types/TAdministrators';
import { TAdministrator } from 'types/TAdministrator';

/**
 * Оновлює дані адміністратора.
 *
 * @function putAdministrator
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TUpdateAdministrator} payload - Об'єкт з оновленими даними адміністратора.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {number} administrator_id - Унікальний ідентифікатор адміністратора.
 * @returns {Promise<TResponseSuccess<TAdministrator>>} - Об'єкт успішної відповіді з даними адміністратора.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.administrators.put({ administrator_id: 1 }, { first_name: 'John', last_name: 'Doe' });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutAdministrator {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TAdministrator>;
  TParams: {
    administrator_id: number;
  };
  TPayload: TUpdateAdministrator;
}

export type TError = TAPIPutAdministrator['TError'];
export type TSuccess = TAPIPutAdministrator['TSuccess'];
export type TParams = TAPIPutAdministrator['TParams'];
export type TPayload = TAPIPutAdministrator['TPayload'];

export async function putAdministrator(
  this: BaseRESTClient,
  { administrator_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/administrators/${administrator_id}/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TAdministrator,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
