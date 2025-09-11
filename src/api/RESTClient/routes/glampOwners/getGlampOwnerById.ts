import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TGlampOwner } from 'types/TGlampOwner';

/**
 * Отримує дані власника Ґлемпу за його ідентифікатором.
 *
 * @function getGlampOwnerById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} glamp_owner_id - Унікальний ідентифікатор власника Ґлемпу.
 * @returns {Promise<TResponseSuccess<TGlampOwner>>} - Об'єкт власника Ґлемпу.
 * @throws {object} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glampOwners.getById({ glamp_owner_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllGlampOwners {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampOwner>;
  TParams: {
    glamp_owner_id: number;
  };
}

export type TError = TAPIGetAllGlampOwners['TError'];
export type TSuccess = TAPIGetAllGlampOwners['TSuccess'];
export type TParams = TAPIGetAllGlampOwners['TParams'];

export async function getGlampOwnerById(
  this: BaseRESTClient,
  { glamp_owner_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/glamp-owners/${glamp_owner_id}/`,
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
