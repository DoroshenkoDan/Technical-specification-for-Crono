import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUser } from 'types/TUser';

/**
 * Отримує поточного користувача.
 *
 * @function getCurrentUser
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TUser>>} - Дані користувача.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const currentUser = await client.api.users.getCurrentUser();
 *   console.log(currentUser);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetCurrentUser {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TUser>;
}

export type TError = TAPIGetCurrentUser['TError'];
export type TSuccess = TAPIGetCurrentUser['TSuccess'];

export async function getCurrentUser(
  this: BaseRESTClient,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/users/current-user/', {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TUser,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
