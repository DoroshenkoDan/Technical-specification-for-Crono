import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateAdministratorPartial } from 'api/RESTClient/types/TAdministrators';
import { TAdministrator } from 'types/TAdministrator';

/**
 * Оновлює частину даних адміністратора.
 *
 * @function patchAdministrator
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TUpdateAdministratorPartial} payload - Об'єкт з оновленими даними адміністратора.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {number} administrator_id - Унікальний ідентифікатор адміністратора.
 * @returns {Promise<TResponseSuccess<TAdministrator>>} - Об'єкт успішної відповіді з даними адміністратора.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.administrators.patch({ administrator_id: 1 }, { first_name: 'John' });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchAdministrator {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TAdministrator>;
  TParams: {
    administrator_id: number;
  };
  TPayload: TUpdateAdministratorPartial;
}

export type TError = TAPIPatchAdministrator['TError'];
export type TSuccess = TAPIPatchAdministrator['TSuccess'];
export type TParams = TAPIPatchAdministrator['TParams'];
export type TPayload = TAPIPatchAdministrator['TPayload'];

export async function patchAdministrator(
  this: BaseRESTClient,
  { administrator_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
