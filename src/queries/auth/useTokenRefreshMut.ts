import {
  MutationOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';

import client from 'api/index';
import {
  TSuccess,
  TPayload,
  TError,
} from 'api/RESTClient/routes/auth/tokenRefresh';

export type TTokenRefreshMut = UseMutationResult<TSuccess, TError, TPayload>;

export type TTokenRefreshMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для tokenRefresh.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getTokenRefreshMutKey = (
  payload: TPayload
): Array<string | TPayload> => ['auth', 'tokenRefresh', payload];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту tokenRefresh.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TTokenRefreshMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getTokenRefreshMutOpts(
  payload: TPayload,
  options?: TTokenRefreshMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getTokenRefreshMutKey(payload),
    mutationFn: (variables: TPayload) => client.api.auth.refresh(variables),
  };
}

/**
 * Хук для виклику мутації tokenRefresh.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TTokenRefreshMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TTokenRefreshMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useTokenRefreshMut(
 *   { refresh: 'your_token' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ refresh: 'your_token' });
 */
export default function useTokenRefreshMut(
  payload: TPayload,
  options?: TTokenRefreshMutOpt
): TTokenRefreshMut {
  const opts = getTokenRefreshMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}
