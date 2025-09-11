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
} from 'api/RESTClient/routes/tourists/patchTourist';

export type TPatchTouristMut = UseMutationResult<
  TSuccess,
  TError,
  { params: TParams; payload: TPayload }
>;

export type TPatchTouristMutOpt = Omit<
  MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для patchTourist.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getPatchTouristMutKey = (
  params: TParams
): Array<string | TParams> => ['tourists', 'patchTourist', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту patchTourist.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPatchTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>} - Опції мутації.
 *
 * @example
 * const { mutate, isPending, isError } = usePatchTouristMut(
 *   { tourist_id: 120 },
 *   { last_name: 'Stark' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({
 *    params: { tourist_id: 120 },  // Параметри запиту
 *    payload: { last_name: 'Stark' }, // Вхідні дані для мутації
 *  });
 */

export function getPatchTouristMutOpts(
  params: TParams,
  payload: TPayload,
  options?: TPatchTouristMutOpt
): MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }> {
  return {
    ...options,
    mutationKey: getPatchTouristMutKey(params),
    mutationFn: () => client.api.tourists.patch(params, payload),
  };
}

/**
 * Хук для виклику мутації patchTourist.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPatchTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TPatchTouristMut} - Результат мутації.
 */
export default function usePatchTouristMut(
  params: TParams,
  payload: TPayload,
  options?: TPatchTouristMutOpt
): TPatchTouristMut {
  const opts = getPatchTouristMutOpts(params, payload, options);
  return useMutation<TSuccess, TError, { params: TParams; payload: TPayload }>(
    opts
  );
}
