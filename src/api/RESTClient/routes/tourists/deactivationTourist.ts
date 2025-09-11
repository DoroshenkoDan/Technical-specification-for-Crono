import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Деактивує туриста за його ID.
 *
 * @function deactivationTourist
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} tourist_id - Унікальний ідентифікатор туриста, якого потрібно деактивувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо деактивація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = client.api.tourists.deactivate({ tourist_id: 2 });
 *   console.log('Турист успішно деактивований', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeactivationTourist {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    tourist_id: number;
  };
}

export type TError = TAPIDeactivationTourist['TError'];
export type TSuccess = TAPIDeactivationTourist['TSuccess'];
export type TParams = TAPIDeactivationTourist['TParams'];

export async function deactivationTourist(
  this: BaseRESTClient,
  { tourist_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/tourists/${tourist_id}/deactivate/`,
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
