import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateManager } from 'api/RESTClient/types/TManagers';
import { TManager } from 'types/TManager';

/**
 * Оновлює дані менеджера.
 *
 * @function putManager
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TUpdatePartial} payload - Об'єкт з оновленими даними менеджера.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {number} manager_id - Унікальний ідентифікатор менеджера.
 * @returns {Promise<TResponseSuccess<TManager>>} - Об'єкт успішної відповіді з даними менеджера.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.managers.put({ manager_id: 1 }, { first_name: 'John', last_name: 'Doe' });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutManager {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TManager>;
  TParams: {
    manager_id: number;
  };
  TPayload: TUpdateManager;
}

export type TError = TAPIPutManager['TError'];
export type TSuccess = TAPIPutManager['TSuccess'];
export type TParams = TAPIPutManager['TParams'];
export type TPayload = TAPIPutManager['TPayload'];

export async function putManager(
  this: BaseRESTClient,
  { manager_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/managers/${manager_id}`,
      payload,
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
