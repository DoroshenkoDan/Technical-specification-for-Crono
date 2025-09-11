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
} from 'api/RESTClient/routes/glampOwners/putGlampOwner';

export type TPutGlampOwnerMut = UseMutationResult<
  TSuccess,
  TError,
  { params: TParams; payload: TPayload }
>;

export type TPutGlampOwnerMutOpt = Omit<
  MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для putGlampOwner.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getPutGlampOwnerMutKey = (
  params: TParams
): Array<string | TParams> => ['glampOwners', 'putGlampOwner', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту putGlampOwner.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPutGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>} - Опції мутації.
 *
 * @example
 * const { mutate, isPending, isError } = usePutGlampOwnerMut(
 *   { glamp_owner_id: 120 },
 *   { first_name: 'Johni', last_name: 'Stark' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({
 *    params: { glamp_owner_id: 120 },  // Параметри запиту
 *    payload: { first_name: 'Johni', last_name: 'Stark' }, // Вхідні дані для мутації
 *  });
 */

export function getPutGlampOwnerMutOpts(
  params: TParams,
  payload: TPayload,
  options?: TPutGlampOwnerMutOpt
): MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }> {
  return {
    ...options,
    mutationKey: getPutGlampOwnerMutKey(params),
    mutationFn: () => client.api.glampOwners.put(params, payload),
  };
}

/**
 * Хук для виклику мутації putGlampOwner.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPutGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TPutGlampOwnerMut} - Результат мутації.
 */
export default function usePutGlampOwnerMut(
  params: TParams,
  payload: TPayload,
  options?: TPutGlampOwnerMutOpt
): TPutGlampOwnerMut {
  const opts = getPutGlampOwnerMutOpts(params, payload, options);
  return useMutation<TSuccess, TError, { params: TParams; payload: TPayload }>(
    opts
  );
}
