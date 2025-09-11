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
} from 'api/RESTClient/routes/tourists/putTourist';

export type TPutTouristMut = UseMutationResult<
  TSuccess,
  TError,
  { params: TParams; payload: TPayload }
>;

export type TPutTouristMutOpt = Omit<
  MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для putTourist.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getPutTouristMutKey = (
  params: TParams
): Array<string | TParams> => ['tourists', 'putTourist', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту putTourist.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPutTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }>} - Опції мутації.
 *
 * @example
 * const { mutate, isPending, isError } = usePutTouristMut(
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

export function getPutTouristMutOpts(
  params: TParams,
  payload: TPayload,
  options?: TPutTouristMutOpt
): MutationOptions<TSuccess, TError, { params: TParams; payload: TPayload }> {
  return {
    ...options,
    mutationKey: getPutTouristMutKey(params),
    mutationFn: () => client.api.tourists.put(params, payload),
  };
}

/**
 * Хук для виклику мутації putTourist.
 *
 * @param {TParams} params - Унікальні параметри запиту.
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TPutTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TPutTouristMut} - Результат мутації.
 */
export default function usePutTouristMut(
  params: TParams,
  payload: TPayload,
  options?: TPutTouristMutOpt
): TPutTouristMut {
  const opts = getPutTouristMutOpts(params, payload, options);
  return useMutation<TSuccess, TError, { params: TParams; payload: TPayload }>(
    opts
  );
}
