import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Деактивує власника Ґлемпу за його ID.
 *
 * @function deactivationGlampOwner
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} glamp_owner_id - Унікальний ідентифікатор власника Ґлемпу, якого потрібно деактивувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо деактивація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = client.api.glampOwners.deactivate({ glamp_owner_id: 2 });
 *   console.log('Власника Ґлемпу успішно деактивований', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeactivationGlampOwner {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    glamp_owner_id: number;
  };
}

export type TError = TAPIDeactivationGlampOwner['TError'];
export type TSuccess = TAPIDeactivationGlampOwner['TSuccess'];
export type TParams = TAPIDeactivationGlampOwner['TParams'];

export async function deactivationGlampOwner(
  this: BaseRESTClient,
  { glamp_owner_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/glamp-owners/${glamp_owner_id}/deactivate/`,
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
