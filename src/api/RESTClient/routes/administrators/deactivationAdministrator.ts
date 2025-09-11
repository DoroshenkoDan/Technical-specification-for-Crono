import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Деактивує адміністратора за його ID.
 *
 * @function deactivationAdministrator
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} administrator_id - Унікальний ідентифікатор адміністратора, якого потрібно деактивувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо деактивація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = client.api.administrators.deactivate({ administrator_id: 2 });
 *   console.log('Адміністратора успішно деактивовано', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeactivationAdministrator {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    administrator_id: number;
  };
}

export type TError = TAPIDeactivationAdministrator['TError'];
export type TSuccess = TAPIDeactivationAdministrator['TSuccess'];
export type TParams = TAPIDeactivationAdministrator['TParams'];

export async function deactivationAdministrator(
  this: BaseRESTClient,
  { administrator_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/administrators/${administrator_id}/deactivate/`,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: null,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
