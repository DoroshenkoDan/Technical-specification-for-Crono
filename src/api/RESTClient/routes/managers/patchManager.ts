import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TUpdateManagerPartial } from 'api/RESTClient/types/TManagers';
import { TManager } from 'types/TManager';

/**
 * Оновлює частину даних менеджера.
 *
 * @function patchManager
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TUpdateManagerPartial} payload - Об'єкт з оновленими даними менеджера.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {number} manager_id - Унікальний ідентифікатор менеджера.
 * @returns {Promise<TResponseSuccess<TManager>>} - Об'єкт успішної відповіді з даними менеджера.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.managers.patch({ manager_id: 1 }, { first_name: 'John' });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchManager {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TManager>;
  TParams: {
    manager_id: number;
  };
  TPayload: TUpdateManagerPartial;
}

export type TError = TAPIPatchManager['TError'];
export type TSuccess = TAPIPatchManager['TSuccess'];
export type TParams = TAPIPatchManager['TParams'];
export type TPayload = TAPIPatchManager['TPayload'];

export async function patchManager(
  this: BaseRESTClient,
  { manager_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
