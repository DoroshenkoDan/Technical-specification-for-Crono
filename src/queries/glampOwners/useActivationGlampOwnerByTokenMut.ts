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
} from 'api/RESTClient/routes/glampOwners/activationGlampOwnerByToken';

export type TActivationGlampOwnerByTokenMut = UseMutationResult<
  TSuccess,
  TError,
  TParams
>;

export type TActivationGlampOwnerByTokenMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для activationGlampOwnerByToken.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getActivationGlampOwnerByTokenMutKey = (
  params: TParams
): Array<string | TParams> => [
  'glampOwners',
  'activationGlampOwnerByToken',
  params,
];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту activationGlampOwnerByToken.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationGlampOwnerByTokenMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getActivationGlampOwnerByTokenMutOpts(
  params: TParams,
  options?: TActivationGlampOwnerByTokenMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getActivationGlampOwnerByTokenMutKey(params),
    mutationFn: (variables: TParams) =>
      client.api.glampOwners.activateByToken(variables),
  };
}

/**
 * Хук для виклику мутації activationGlampOwnerByToken.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationGlampOwnerByTokenMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TActivationGlampOwnerByTokenMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useActivationGlampOwnerByTokenMut(
 *   { glamp_owner_id: 1 },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ glamp_owner_id: 1 });
 */
export default function useActivationGlampOwnerByTokenMut(
  params: TParams,
  options?: TActivationGlampOwnerByTokenMutOpt
): TActivationGlampOwnerByTokenMut {
  const opts = getActivationGlampOwnerByTokenMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
