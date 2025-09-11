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
} from 'api/RESTClient/routes/users/activationUser';

export type TActivationUserMut = UseMutationResult<TSuccess, TError, TParams>;

export type TActivationUserMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для activationUser.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getActivationUserMutKey = (
  params: TParams
): Array<string | TParams> => ['users', 'activationUser', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту activationUser.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationUserMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getActivationUserMutOpts(
  params: TParams,
  options?: TActivationUserMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getActivationUserMutKey(params),
    mutationFn: (variables: TParams) => client.api.users.activate(variables),
  };
}

/**
 * Хук для виклику мутації activationUser.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationUserMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TActivationUserMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useActivationUserMut(
 *   { user_id: 1 },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ user_id: 1 });
 */
export default function useActivationUserMut(
  params: TParams,
  options?: TActivationUserMutOpt
): TActivationUserMut {
  const opts = getActivationUserMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
