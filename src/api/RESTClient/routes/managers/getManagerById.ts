import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient.ts';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types.ts';
import { TManager } from 'types/TManager.ts';

/**
 * Отримує дані Менеджера за його ідентифікатором.
 *
 * @function getManagerById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {number} manager_id - Унікальний ідентифікатор Менеджера.
 * @returns {Promise<TResponseSuccess<TManager>>} - Об'єкт успішної відповіді з даними Менеджера.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.managers.getById({ manager_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetManagerById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TManager>;
  TParams: {
    manager_id: number;
  };
}

export type TError = TAPIGetManagerById['TError'];
export type TSuccess = TAPIGetManagerById['TSuccess'];
export type TParams = TAPIGetManagerById['TParams'];

export async function getManagerById(
  this: BaseRESTClient,
  { manager_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/managers/${manager_id}`,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TManager,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
