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
} from 'api/RESTClient/routes/glampOwners/deactivationGlampOwner';

export type TDeactivationGlampOwnerMut = UseMutationResult<
  TSuccess,
  TError,
  TParams
>;

export type TDeactivationGlampOwnerMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для deactivationGlampOwner.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getDeactivationGlampOwnerMutKey = (
  params: TParams
): Array<string | TParams> => ['glampOwners', 'deactivationGlampOwner', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту deactivationGlampOwner.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TDeactivationGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getDeactivationGlampOwnerMutOpts(
  params: TParams,
  options?: TDeactivationGlampOwnerMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getDeactivationGlampOwnerMutKey(params),
    mutationFn: (variables: TParams) =>
      client.api.glampOwners.deactivate(variables),
  };
}

/**
 * Хук для виклику мутації deactivationGlampOwner.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TDeactivationGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TDeactivationGlampOwnerMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useDeactivationGlampOwnerMut(
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
export default function useDeactivationGlampOwnerMut(
  params: TParams,
  options?: TDeactivationGlampOwnerMutOpt
): TDeactivationGlampOwnerMut {
  const opts = getDeactivationGlampOwnerMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
