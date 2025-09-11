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
} from 'api/RESTClient/routes/users/putUser';

export type TPutUserMut = UseMutationResult<
  TSuccess,
  TError,
  { params: TParams; payload: TPayload }
>;

export type TPutUserMutOpt = Omit<
  MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для putUser.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getPutUserMutKey = (params: TParams): Array<string | TParams> => [
  'users',
  'putUser',
  params,
];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту putUser.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPutUserMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>} - Опції мутації.
 *
 * @example
 * const { mutate, isPending, isError } = usePutUserMut(
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

export function getPutUserMutOpts(
  params: TParams,
  payload: TPayload,
  options?: TPutUserMutOpt
): MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }> {
  return {
    ...options,
    mutationKey: getPutUserMutKey(params),
    mutationFn: () => client.api.users.put(params, payload),
  };
}

/**
 * Хук для виклику мутації putUser.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPutUserMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TPutUserMut} - Результат мутації.
 */
export default function usePutUserMut(
  params: TParams,
  payload: TPayload,
  options?: TPutUserMutOpt
): TPutUserMut {
  const opts = getPutUserMutOpts(params, payload, options);
  return useMutation<TSuccess, TError, { params: TParams; payload: TPayload }>(
    opts
  );
}
