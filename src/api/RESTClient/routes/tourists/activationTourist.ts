import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Активує туриста за його ID.
 *
 * @function activateTourist
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} tourist_id - Унікальний ідентифікатор туриста, якого потрібно активувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо активація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = client.api.tourists.activate({ tourist_id: 2 });
 *   console.log('Турист успішно активований', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIActivationTourist {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    tourist_id: number;
  };
}

export type TError = TAPIActivationTourist['TError'];
export type TSuccess = TAPIActivationTourist['TSuccess'];
export type TParams = TAPIActivationTourist['TParams'];

export async function activationTourist(
  this: BaseRESTClient,
  { tourist_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/tourists/${tourist_id}/activate/`,
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
