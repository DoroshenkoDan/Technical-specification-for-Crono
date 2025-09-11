import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Деактивує користувача за його ID.
 *
 * @function deactivationUser
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} user_id - Унікальний ідентифікатор користувача, якого потрібно деактивувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо деактивування успішне.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   await client.api.users.deactivate({ user_id: 123 });
 *   console.log('користувача успішно деактивовано');
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeactivationUser {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    user_id: number;
  };
}

export type TError = TAPIDeactivationUser['TError'];
export type TSuccess = TAPIDeactivationUser['TSuccess'];
export type TParams = TAPIDeactivationUser['TParams'];

export async function deactivationUser(
  this: BaseRESTClient,
  { user_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/users/${user_id}/deactivate/`,
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
