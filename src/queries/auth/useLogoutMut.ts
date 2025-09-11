import {
  MutationOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';

import client from 'api/index';
import { TSuccess, TPayload, TError } from 'api/RESTClient/routes/auth/logout';

export type TLogoutMut = UseMutationResult<TSuccess, TError, TPayload>;

export type TLogoutMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для logout.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getLogoutMutKey = (
  payload: TPayload
): Array<string | TPayload> => ['auth', 'logout', payload];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту logout.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TLogoutMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getLogoutMutOpts(
  payload: TPayload,
  options?: TLogoutMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getLogoutMutKey(payload),
    mutationFn: (variables: TPayload) => client.api.auth.logout(variables),
  };
}

/**
 * Хук для виклику мутації logout.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TLogoutMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TLogoutMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useLogoutMut(
 *   { refresh_token: 'your_refresh_token' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ refresh_token: 'your_refresh_token' });
 */
export default function useLogoutMut(
  payload: TPayload,
  options?: TLogoutMutOpt
): TLogoutMut {
  const opts = getLogoutMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}
