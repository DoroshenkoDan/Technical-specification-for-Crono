import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TTourist } from 'types/TTourist';

/**
 * Отримує дані туриста за його ідентифікатором.
 *
 * @function getTouristById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} tourist_id - Унікальний ідентифікатор туриста.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TTourist>>} - Об'єкт туриста.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.tourists.getById({ tourist_id: 15 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetTouristById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TTourist>;
  TParams: {
    tourist_id: number;
  };
}

export type TError = TAPIGetTouristById['TError'];
export type TSuccess = TAPIGetTouristById['TSuccess'];
export type TParams = TAPIGetTouristById['TParams'];

export async function getTouristById(
  this: BaseRESTClient,
  { tourist_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/tourists/${tourist_id}/`,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TTourist,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
