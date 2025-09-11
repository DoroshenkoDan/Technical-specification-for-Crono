import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Активує менеджера за його ID.
 *
 * @function activationManager
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} manager_id - Унікальний ідентифікатор менеджера, якого потрібно активувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо активація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = client.api.managers.activate({ manager_id: 2 });
 *   console.log('Менеджер успішно активований', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIActivationManager {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    manager_id: number;
  };
}

export type TError = TAPIActivationManager['TError'];
export type TSuccess = TAPIActivationManager['TSuccess'];
export type TParams = TAPIActivationManager['TParams'];

export async function activationManager(
  this: BaseRESTClient,
  { manager_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/managers/${manager_id}/activate/`,
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
