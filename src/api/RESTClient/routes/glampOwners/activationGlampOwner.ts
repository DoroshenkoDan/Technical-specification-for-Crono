import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Активує власника Ґлемпу за його ID.
 *
 * @function activationGlampOwner
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} glamp_owner_id - Унікальний ідентифікатор власника Ґлемпу, якого потрібно активувати.
 * @returns {Promise<TResponseSuccess<null>>} - Функція не повертає значення, якщо активація успішна.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const response = client.api.glampOwners.activate({ glamp_owner_id: 2 });
 *   console.log('Власника Ґлемпу успішно активований', response);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIActivationGlampOwners {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    glamp_owner_id: number;
  };
}

export type TError = TAPIActivationGlampOwners['TError'];
export type TSuccess = TAPIActivationGlampOwners['TSuccess'];
export type TParams = TAPIActivationGlampOwners['TParams'];

export async function activationGlampOwner(
  this: BaseRESTClient,
  { glamp_owner_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/glamp-owners/${glamp_owner_id}/activate/`,
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
