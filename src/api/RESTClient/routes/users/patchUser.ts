import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TEmailUser } from 'api/RESTClient/types/TUsers';
import { TUser } from 'types/TUser';

/**
 * Оновлює частину дананих користувача.
 *
 * @function patchUser
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} user_id - Унікальний ідентифікатор користувача.
 * @param {TEmailUser} params - Об'єкт з оновленими даними користувача.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TUser>>} - Оновлені дані користувача.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const updatedUser = await client.api.users.patch({ user_id: 100 }, { email: 'example@mail.com' });
 *   console.log(updatedUser);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchUser {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TUser>;
  TParams: {
    user_id: number;
  };
  TPayload: TEmailUser;
}

export type TError = TAPIPatchUser['TError'];
export type TSuccess = TAPIPatchUser['TSuccess'];
export type TParams = TAPIPatchUser['TParams'];
export type TPayload = TAPIPatchUser['TPayload'];

export async function patchUser(
  this: BaseRESTClient,
  { user_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/users/${user_id}/`,
      payload,
      {
        ...config,
        signal,
      }
    );
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
