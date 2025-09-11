import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TEventLog } from 'api/RESTClient/types/TEvents';

/**
 * Отримує подію за ідентифікатором.
 *
 * @function getEventLogById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} event_id - Унікальний ідентифікатор події.
 * @returns {Promise<TResponseSuccess<TEventLog>>} - Об'єкт події.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const log = await client.api.eventlogs.getById({ event_id: 1 });
 *   console.log(log);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetEventLogById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TEventLog>;
  TParams: {
    event_id: number;
  };
}

export type TError = TAPIGetEventLogById['TError'];
export type TSuccess = TAPIGetEventLogById['TSuccess'];
export type TParams = TAPIGetEventLogById['TParams'];

export async function getEventLogById(
  this: BaseRESTClient,
  { event_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/eventlogs/${event_id}/`,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TEventLog,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
