import {
  MutationOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';

import client from 'api/index';
import {
  TSuccess,
  TParams,
  TError,
} from 'api/RESTClient/routes/auth/passwordResetConfirm';

export type TPasswordResetConfirmMut = UseMutationResult<
  TSuccess,
  TError,
  TParams
>;

export type TPasswordResetConfirmMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для passwordResetConfirm.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getPasswordResetConfirmMutKey = (
  params: TParams
): Array<string | TParams> => ['users', 'passwordResetConfirm', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту passwordResetConfirm.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TPasswordResetConfirmMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getPasswordResetConfirmMutOpts(
  params: TParams,
  options?: TPasswordResetConfirmMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getPasswordResetConfirmMutKey(params),
    mutationFn: (variables: TParams) =>
      client.api.auth.passwordResetConfirm(variables),
  };
}

/**
 * Хук для виклику мутації passwordResetConfirm.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TPasswordResetConfirmMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TPasswordResetConfirmMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = usePasswordResetConfirmMut(
 *   { new_password: '1234', confirm_password: '1234', token: 'token123', uidb64: 'uidb64value' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ new_password: '1234', confirm_password: '1234', token: 'token123', uidb64: 'uidb64value' });
 */
export default function usePasswordResetConfirmMut(
  params: TParams,
  options?: TPasswordResetConfirmMutOpt
): TPasswordResetConfirmMut {
  const opts = getPasswordResetConfirmMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
