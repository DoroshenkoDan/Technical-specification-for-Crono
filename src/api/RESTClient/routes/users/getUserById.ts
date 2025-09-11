import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUser } from 'types/TUser';

/**
 * Отримує дані користувача за його ідентифікатором.
 *
 * @function getUserById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} user_id - Унікальний ідентифікатор користувача.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TUser>>} - Об'єкт користувача.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const user = await client.api.user.getById({ user_id: 1 });
 *   console.log(user);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetUserById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TUser>;
  TParams: {
    user_id: number;
  };
}

export type TError = TAPIGetUserById['TError'];
export type TSuccess = TAPIGetUserById['TSuccess'];
export type TParams = TAPIGetUserById['TParams'];

export async function getUserById(
  this: BaseRESTClient,
  { user_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(`/users/${user_id}/`, {
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
