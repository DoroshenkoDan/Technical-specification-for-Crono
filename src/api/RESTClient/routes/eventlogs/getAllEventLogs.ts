import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TListEventLogs } from 'api/RESTClient/types/TEvents';

/**
 * Отримує список усіх подій із сервера.
 *
 * @function getAllEventLogs
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListEventLogs>>} - Об'єкт із списком подій, що містить `count`, `next`, `previous`, `page`, `pageSize`, `results`.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const logs = await client.api.eventlogs.getAll();
 *   console.log(logs.results);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllEventLogs {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListEventLogs>;
}

export type TError = TAPIGetAllEventLogs['TError'];
export type TSuccess = TAPIGetAllEventLogs['TSuccess'];

export async function getAllEventLogs(
  this: BaseRESTClient,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/eventlogs/', {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TListEventLogs,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
