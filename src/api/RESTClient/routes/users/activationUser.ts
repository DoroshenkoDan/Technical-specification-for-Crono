import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Активує користувача за його ID.
 *
 * @function activationUser
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} user_id - Унікальний ідентифікатор користувача, якого потрібно активувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо активування успішне.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   await client.api.users.activate({ user_id: 123 });
 *   console.log('користувача успішно активовано');
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIActivationUser {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    user_id: number;
  };
}

export type TError = TAPIActivationUser['TError'];
export type TSuccess = TAPIActivationUser['TSuccess'];
export type TParams = TAPIActivationUser['TParams'];

export async function activationUser(
  this: BaseRESTClient,
  { user_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/users/${user_id}/activate/`,
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
