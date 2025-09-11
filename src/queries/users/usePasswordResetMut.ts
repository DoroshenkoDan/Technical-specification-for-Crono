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
} from 'api/RESTClient/routes/auth/passwordReset';

export type TPasswordResetMut = UseMutationResult<TSuccess, TError, TPayload>;

export type TPasswordResetMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для passwordReset.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getPasswordResetMutKey = (
  payload: TPayload
): Array<string | TPayload> => ['users', 'passwordReset', payload];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту passwordReset.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPasswordResetMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getPasswordResetMutOpts(
  payload: TPayload,
  options?: TPasswordResetMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getPasswordResetMutKey(payload),
    mutationFn: (variables: TPayload) =>
      client.api.auth.passwordReset(variables),
  };
}

/**
 * Хук для виклику мутації passwordReset.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPasswordResetMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TPasswordResetMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = usePasswordResetMut(
 *   { email: 'hello@mail.com' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ email: 'hello@mail.com' });
 */
export default function usePasswordResetMut(
  payload: TPayload,
  options?: TPasswordResetMutOpt
): TPasswordResetMut {
  const opts = getPasswordResetMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}
