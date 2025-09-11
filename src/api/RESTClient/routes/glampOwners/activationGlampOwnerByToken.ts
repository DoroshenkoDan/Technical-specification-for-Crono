import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Активує власника Ґлемпу за допомогою його токена доступу.
 *
 * @function activationGlampOwnerByToken
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {string} token - Токен доступу для активації власника Ґлемпу.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо активація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = await client.api.glampOwners.activateByToken({ token: 'your-token' });
 *   console.log('Власник Ґлемпу успішно активований', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIActivateGlampOwnerByToken {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    token: string;
  };
}

export type TError = TAPIActivateGlampOwnerByToken['TError'];
export type TSuccess = TAPIActivateGlampOwnerByToken['TSuccess'];
export type TParams = TAPIActivateGlampOwnerByToken['TParams'];

export async function activationGlampOwnerByToken(
  this: BaseRESTClient,
  { token }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/glamp-owners/activate/${token}/`,
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
