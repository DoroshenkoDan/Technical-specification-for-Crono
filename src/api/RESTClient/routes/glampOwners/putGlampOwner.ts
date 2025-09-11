import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateGlampOwner } from 'api/RESTClient/types/TGlampOwners';
import { TGlampOwner } from 'types/TGlampOwner';

/**
 * Оновлює дані власника Ґлемпу.
 *
 * @function putGlampOwner
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} glamp_owner_id - Унікальний ідентифікатор власника Ґлемпу.
 * @param {TUpdateGlampOwner} payload - Об'єкт з оновленими даними власника Ґлемпу.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TGlampOwner>>} - Оновлені дані власника Ґлемпу.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glampOwners.put({ glamp_owner_id: 1 }, { first_name: 'John', last_name: 'Doe' });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutGlampOwner {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampOwner>;
  TParams: {
    glamp_owner_id: number;
  };
  TPayload: TUpdateGlampOwner;
}

export type TError = TAPIPutGlampOwner['TError'];
export type TSuccess = TAPIPutGlampOwner['TSuccess'];
export type TParams = TAPIPutGlampOwner['TParams'];
export type TPayload = TAPIPutGlampOwner['TPayload'];

export async function putGlampOwner(
  this: BaseRESTClient,
  { glamp_owner_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/glamp-owners/${glamp_owner_id}/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TGlampOwner,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
