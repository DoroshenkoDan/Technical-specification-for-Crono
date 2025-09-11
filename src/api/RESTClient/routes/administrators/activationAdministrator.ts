import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Активує адміністратора за його ID.
 *
 * @function activationAdministrator
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} administrator_id - Унікальний ідентифікатор адміністратора, якого потрібно активувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо активація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = client.api.administrators.activate({ administrator_id: 2 });
 *   console.log('Адміністратора успішно активовано', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIActivationAdministrator {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    administrator_id: number;
  };
}

export type TError = TAPIActivationAdministrator['TError'];
export type TSuccess = TAPIActivationAdministrator['TSuccess'];
export type TParams = TAPIActivationAdministrator['TParams'];

export async function activationAdministrator(
  this: BaseRESTClient,
  { administrator_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/administrators/${administrator_id}/activate/`,
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
