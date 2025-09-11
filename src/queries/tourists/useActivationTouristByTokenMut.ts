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
} from 'api/RESTClient/routes/tourists/activationTouristByToken';

export type TActivationTouristByTokenMut = UseMutationResult<
  TSuccess,
  TError,
  TParams
>;

export type TActivationTouristByTokenMutOpt = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для activationTouristByToken.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @returns {Array<string | TParams>} - Унікальний ключ мутації.
 */
export const getActivationTouristByTokenMutKey = (
  params: TParams
): Array<string | TParams> => ['tourists', 'activationTouristByToken', params];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту activationTouristByToken.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationTouristByTokenMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TParams>} - Опції мутації.
 */
export function getActivationTouristByTokenMutOpts(
  params: TParams,
  options?: TActivationTouristByTokenMutOpt
): MutationOptions<TSuccess, TError, TParams> {
  return {
    ...options,
    mutationKey: getActivationTouristByTokenMutKey(params),
    mutationFn: (variables: TParams) =>
      client.api.tourists.activateByToken(variables),
  };
}

/**
 * Хук для виклику мутації activationTouristByToken.
 *
 * @param {TParams} params - Вхідні параметри для мутації.
 * @param {TActivationTouristByTokenMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TActivationTouristByTokenMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useActivationTouristByTokenMut(
 *   { token: 'your-token' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ token: 'your-token' });
 */
export default function useActivationTouristByTokenMut(
  params: TParams,
  options?: TActivationTouristByTokenMutOpt
): TActivationTouristByTokenMut {
  const opts = getActivationTouristByTokenMutOpts(params, options);
  return useMutation<TSuccess, TError, TParams>(opts);
}
