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
} from 'api/RESTClient/routes/users/deactivationUser';

export type TDeactivationUserMut = UseMutationResult<TSuccess, TError, TParams>;

export type TDeactivationUserMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для deactivationUser.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getDeactivationUserMutKey = (
  params: TParams
): Array<string | TParams> => ['users', 'deactivationUser', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту deactivationUser.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TDeactivationUserMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getDeactivationUserMutOpts(
  params: TParams,
  options?: TDeactivationUserMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getDeactivationUserMutKey(params),
    mutationFn: (variables: TParams) => client.api.users.deactivate(variables),
  };
}

/**
 * Хук для виклику мутації deactivationUser.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TDeactivationUserMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TDeactivationUserMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useDeactivationUserMut(
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
export default function useDeactivationUserMut(
  params: TParams,
  options?: TDeactivationUserMutOpt
): TDeactivationUserMut {
  const opts = getDeactivationUserMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
