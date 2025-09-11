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
} from 'api/RESTClient/routes/auth/tokenVerify';

export type TTokenVerifyMut = UseMutationResult<TSuccess, TError, TPayload>;

export type TTokenVerifyMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для tokenVerify.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getTokenVerifyMutKey = (
  payload: TPayload
): Array<string | TPayload> => ['auth', 'tokenVerify', payload];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту tokenVerify.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TTokenVerifyMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getTokenVerifyMutOpts(
  payload: TPayload,
  options?: TTokenVerifyMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getTokenVerifyMutKey(payload),
    mutationFn: (variables: TPayload) => client.api.auth.verify(variables),
  };
}

/**
 * Хук для виклику мутації tokenVerify.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TTokenVerifyMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TTokenVerifyMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useTokenVerifyMut(
 *   { token: 'your_token' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ token: 'your_token' });
 */
export default function useTokenVerifyMut(
  payload: TPayload,
  options?: TTokenVerifyMutOpt
): TTokenVerifyMut {
  const opts = getTokenVerifyMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}
