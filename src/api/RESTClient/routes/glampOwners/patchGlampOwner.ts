import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateGlampOwnerPartial } from 'api/RESTClient/types/TGlampOwners';
import { TGlampOwner } from 'types/TGlampOwner';

/**
 * Оновлює частину даних власника Ґлемпу.
 *
 * @function patchGlampOwner
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} glamp_owner_id - Унікальний ідентифікатор власника Ґлемпу.
 * @param {TUpdateGlampOwnerPartial} payload - Об'єкт з оновленими даними власника Ґлемпу.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TGlampOwner>>} - Оновлені дані власника Ґлемпу.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glampOwners.patch({ glamp_owner_id: 1 }, { first_name: 'John' });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchGlampOwner {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampOwner>;
  TParams: {
    glamp_owner_id: number;
  };
  TPayload: TUpdateGlampOwnerPartial;
}

export type TError = TAPIPatchGlampOwner['TError'];
export type TSuccess = TAPIPatchGlampOwner['TSuccess'];
export type TParams = TAPIPatchGlampOwner['TParams'];
export type TPayload = TAPIPatchGlampOwner['TPayload'];

export async function patchGlampOwner(
  this: BaseRESTClient,
  { glamp_owner_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
  } catch (error: any | Error) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
