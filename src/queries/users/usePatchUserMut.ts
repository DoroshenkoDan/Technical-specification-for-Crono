import {
  MutationOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';

import client from 'api/index';
import {
  TSuccess,
  TParams,
  TPayload,
  TError,
} from 'api/RESTClient/routes/users/patchUser';

export type TPatchUserMut = UseMutationResult<
  TSuccess,
  TError,
  { params: TParams; payload: TPayload }
>;

export type TPatchUserMutOpt = Omit<
  MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для patchUser.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getPatchUserMutKey = (
  params: TParams
): Array<string | TParams> => ['users', 'patchUser', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту patchUser.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPatchUserMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>} - Опції мутації.
 *
 * @example
 * const { mutate, isPending, isError } = usePatchUserMut(
 *   { user_id: 120 },
 *   { email: 'example@mail.com' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({
 *    params: { user_id: 120 },  // Параметри запиту
 *    payload: { email: 'example@mail.com' }, // Вхідні дані для мутації
 *  });
 */

export function getPatchUserMutOpts(
  params: TParams,
  payload: TPayload,
  options?: TPatchUserMutOpt
): MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }> {
  return {
    ...options,
    mutationKey: getPatchUserMutKey(params),
    mutationFn: () => client.api.users.patch(params, payload),
  };
}

/**
 * Хук для виклику мутації patchUser.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPatchUserMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TPatchUserMut} - Результат мутації.
 */
export default function usePatchUserMut(
  params: TParams,
  payload: TPayload,
  options?: TPatchUserMutOpt
): TPatchUserMut {
  const opts = getPatchUserMutOpts(params, payload, options);
  return useMutation<TSuccess, TError, { params: TParams; payload: TPayload }>(
    opts
  );
}
