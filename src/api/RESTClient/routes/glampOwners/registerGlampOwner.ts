import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TRegisterGlampOwner } from 'api/RESTClient/types/TGlampOwners';
import { TGlampOwner } from 'types/TGlampOwner';

/**
 * Реєструє нового власника Ґлемпу.
 *
 * @function registerGlampOwner
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TRegisterGlampOwner} params - Дані для реєстрації власника Ґлемпу.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TGlampOwner>>} - Відповідь сервера з даними зареєстрованого власника Ґлемпу.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.glampOwners.register({
 *     user: { email: 'test@example.com', password: '123456', confirm_password: '123456' },
 *     first_name: 'John',
 *     last_name: 'Doe',
 *     phone: '+123456789'
 *   });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIRegisterGlampOwner {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TGlampOwner>;
  TPayload: TRegisterGlampOwner;
}

export type TError = TAPIRegisterGlampOwner['TError'];
export type TSuccess = TAPIRegisterGlampOwner['TSuccess'];
export type TPayload = TAPIRegisterGlampOwner['TPayload'];

export async function registerGlampOwner(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>(
      '/glamp-owners/register-glamp_owner/',
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
