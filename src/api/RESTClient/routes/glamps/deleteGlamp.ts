import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Видаляє Ґлемп за його ID.
 *
 * @function deleteGlamp
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} glamp_id - Унікальний ідентифікатор Ґлемпа, який потрібно видалити.
 * @returns {Promise<TResponseSuccess<null>>} - Об'єкт успішної відповіді.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   await client.api.glamps.delete({ glamp_id: 1 });
 *   console.log('Ґлемп успішно видалено');
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeleteGlamp {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    glamp_id: number;
  };
}

export type TError = TAPIDeleteGlamp['TError'];
export type TSuccess = TAPIDeleteGlamp['TSuccess'];
export type TParams = TAPIDeleteGlamp['TParams'];

export async function deleteGlamp(
  this: BaseRESTClient,
  { glamp_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.delete<TSuccess>(
      `/glamps/${glamp_id}/`,
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
