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
} from 'api/RESTClient/routes/glampOwners/activationGlampOwner';

export type TActivationGlampOwnerMut = UseMutationResult<
  TSuccess,
  TError,
  TParams
>;

export type TActivationGlampOwnerMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для activationGlampOwner.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getActivationGlampOwnerMutKey = (
  params: TParams
): Array<string | TParams> => ['glampOwners', 'activationGlampOwner', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту activationGlampOwner.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getActivationGlampOwnerMutOpts(
  params: TParams,
  options?: TActivationGlampOwnerMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getActivationGlampOwnerMutKey(params),
    mutationFn: (variables: TParams) =>
      client.api.glampOwners.activate(variables),
  };
}

/**
 * Хук для виклику мутації activationGlampOwner.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TActivationGlampOwnerMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useActivationGlampOwnerMut(
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
export default function useActivationGlampOwnerMut(
  params: TParams,
  options?: TActivationGlampOwnerMutOpt
): TActivationGlampOwnerMut {
  const opts = getActivationGlampOwnerMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
