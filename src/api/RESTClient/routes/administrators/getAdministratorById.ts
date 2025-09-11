import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient.ts';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types.ts';
import { TAdministrator } from 'types/TAdministrator';

/**
 * Отримує дані адміністратора за його ідентифікатором.
 *
 * @function getAdministratorById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {number} administrator_id - Унікальний ідентифікатор адміністратора.
 * @returns {Promise<TResponseSuccess<TAdministrator>>} - Об'єкт успішної відповіді з даними адміністратора.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.administrators.getById({ administrator_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIAdministratorById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TAdministrator>;
  TParams: {
    administrator_id: number;
  };
}

export type TError = TAPIAdministratorById['TError'];
export type TSuccess = TAPIAdministratorById['TSuccess'];
export type TParams = TAPIAdministratorById['TParams'];

export async function getAdministratorById(
  this: BaseRESTClient,
  { administrator_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/administrators/${administrator_id}/`,
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
