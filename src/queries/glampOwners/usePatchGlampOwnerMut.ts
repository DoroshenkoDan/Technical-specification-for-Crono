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
} from 'api/RESTClient/routes/glampOwners/patchGlampOwner';

export type TPatchGlampOwnerMut = UseMutationResult<
  TSuccess,
  TError,
  { params: TParams; payload: TPayload }
>;

export type TPatchGlampOwnerMutOpt = Omit<
  MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для patchGlampOwner.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getPatchGlampOwnerMutKey = (
  params: TParams
): Array<string | TParams> => ['glampOwners', 'patchGlampOwner', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту patchGlampOwner.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPatchGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>} - Опції мутації.
 *
 * @example
 * const { mutate, isPending, isError } = usePatchGlampOwnerMut(
 *   { glamp_owner_id: 120 },
 *   { last_name: 'Stark' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({
 *    params: { glamp_owner_id: 120 },  // Параметри запиту
 *    payload: { last_name: 'Stark' }, // Вхідні дані для мутації
 *  });
 */

export function getPatchGlampOwnerMutOpts(
  params: TParams,
  payload: TPayload,
  options?: TPatchGlampOwnerMutOpt
): MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }> {
  return {
    ...options,
    mutationKey: getPatchGlampOwnerMutKey(params),
    mutationFn: () => client.api.glampOwners.patch(params, payload),
  };
}

/**
 * Хук для виклику мутації patchGlampOwner.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPatchGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TPatchGlampOwnerMut} - Результат мутації.
 */
export default function usePatchGlampOwnerMut(
  params: TParams,
  payload: TPayload,
  options?: TPatchGlampOwnerMutOpt
): TPatchGlampOwnerMut {
  const opts = getPatchGlampOwnerMutOpts(params, payload, options);
  return useMutation<TSuccess, TError, { params: TParams; payload: TPayload }>(
    opts
  );
}
