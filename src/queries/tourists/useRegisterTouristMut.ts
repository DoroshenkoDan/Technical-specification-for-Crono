import {
  MutationOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';

import client from 'api/index';
import {
  TSuccess,
  TPayload,
  TError,
} from 'api/RESTClient/routes/tourists/registerTourist';

export type TRegisterTouristMut = UseMutationResult<TSuccess, TError, TPayload>;

export type TRegisterTouristMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для registerTourist.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getRegisterTouristMutKey = (
  payload: TPayload
): Array<string | TPayload> => ['tourists', 'registerTourist', payload];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту registerTourist.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TRegisterTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getRegisterTouristMutOpts(
  payload: TPayload,
  options?: TRegisterTouristMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getRegisterTouristMutKey(payload),
    mutationFn: (variables: TPayload) =>
      client.api.tourists.register(variables),
  };
}

/**
 * Хук для виклику мутації registerTourist.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TRegisterTouristMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TRegisterTouristMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending } = useRegisterTouristMut(
 *   {
 *     user: { email: 'test@example.com', password: '123456', confirm_password: '123456' },
 *     first_name: 'John',
 *     last_name: 'Doe',
 *     birthday: '1990-01-01',
 *     phone: '+123456789'
 *   },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({
 *     user: { email: 'test@example.com', password: '123456', confirm_password: '123456' },
 *     first_name: 'John',
 *     last_name: 'Doe',
 *     birthday: '1990-01-01',
 *     phone: '+123456789'
 *   });
 */
export default function useRegisterTouristMut(
  payload: TPayload,
  options?: TRegisterTouristMutOpt
): TRegisterTouristMut {
  const opts = getRegisterTouristMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}
