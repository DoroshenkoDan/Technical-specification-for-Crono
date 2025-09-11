import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient.ts';
import { TListAdministrators } from 'api/RESTClient/types/TAdministrators';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types.ts';

/**
 * Отримує список усіх адміністраторів із сервера.
 *
 * @function getAllAdministrators
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListAdministrators>>} - Об'єкт успішної відповіді з даними адміністраторів.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.administrators.getAll();
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllAdministrators {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListAdministrators>;
}

export type TError = TAPIGetAllAdministrators['TError'];
export type TSuccess = TAPIGetAllAdministrators['TSuccess'];

export async function getAllAdministrators(
  this: BaseRESTClient,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/administrators/', {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TListAdministrators,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
