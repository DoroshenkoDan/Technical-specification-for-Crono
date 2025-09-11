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
} from 'api/RESTClient/routes/tourists/deactivationTourist';

export type TDeactivationTouristMut = UseMutationResult<
  TSuccess,
  TError,
  TParams
>;

export type TDeactivationTouristMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для deactivationTourist.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getDeactivationTouristMutKey = (
  params: TParams
): Array<string | TParams> => ['tourists', 'deactivationTourist', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту deactivationTourist.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TDeactivationTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getDeactivationTouristMutOpts(
  params: TParams,
  options?: TDeactivationTouristMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getDeactivationTouristMutKey(params),
    mutationFn: (variables: TParams) =>
      client.api.tourists.deactivate(variables),
  };
}

/**
 * Хук для виклику мутації deactivationTourist.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TDeactivationTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TDeactivationTouristMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useDeactivationTouristMut(
 *   { tourist_id: 1 },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ tourist_id: 1 });
 */
export default function useDeactivationTouristMut(
  params: TParams,
  options?: TDeactivationTouristMutOpt
): TDeactivationTouristMut {
  const opts = getDeactivationTouristMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
