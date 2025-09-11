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
} from 'api/RESTClient/routes/tourists/activationTourist';

export type TActivationTouristMut = UseMutationResult<
  TSuccess,
  TError,
  TParams
>;

export type TActivationTouristMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для activationTourist.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getActivationTouristMutKey = (
  params: TParams
): Array<string | TParams> => ['tourists', 'activationTourist', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту activationTourist.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getActivationTouristMutOpts(
  params: TParams,
  options?: TActivationTouristMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getActivationTouristMutKey(params),
    mutationFn: (variables: TParams) => client.api.tourists.activate(variables),
  };
}

/**
 * Хук для виклику мутації activationTourist.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TActivationTouristMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useActivationTouristMut(
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
export default function useActivationTouristMut(
  params: TParams,
  options?: TActivationTouristMutOpt
): TActivationTouristMut {
  const opts = getActivationTouristMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
