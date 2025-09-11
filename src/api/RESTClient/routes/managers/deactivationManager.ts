import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Деактивує менеджера за його ID.
 *
 * @function deactivationManager
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} manager_id - Унікальний ідентифікатор менеджера, якого потрібно деактивувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо деактивація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = client.api.managers.deactivate({ manager_id: 2 });
 *   console.log('Менеджер успішно деактивований', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeactivationManagers {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    manager_id: number;
  };
}

export type TError = TAPIDeactivationManagers['TError'];
export type TSuccess = TAPIDeactivationManagers['TSuccess'];
export type TParams = TAPIDeactivationManagers['TParams'];

export async function deactivationManager(
  this: BaseRESTClient,
  { manager_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/managers/${manager_id}/deactivate/`,
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
