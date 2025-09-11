import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TListUsers } from 'api/RESTClient/types/TUsers';

/**
 * Отримує список усіх користувачів із сервера.
 *
 * @function getAllUsers
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListUsers>>} - Об'єкт із списком користувачів, що містить `count`, `next`, `previous`, `page`, `pageSize`, `results`.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.users.getAll();
 *   console.log(data.results);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllUsers {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListUsers>;
}

export type TError = TAPIGetAllUsers['TError'];
export type TSuccess = TAPIGetAllUsers['TSuccess'];

export async function getAllUsers(
  this: BaseRESTClient,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/users/', {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TListUsers,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
