import {
  MutationOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';

import client from 'api/index';
import { TSuccess, TPayload, TError } from 'api/RESTClient/routes/auth/login';

export type TLoginMut = UseMutationResult<TSuccess, TError, TPayload>;

export type TLoginMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для login.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getLoginMutKey = (payload: TPayload): Array<string | TPayload> => [
  'auth',
  'login',
  payload.email,
];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту login.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TLoginMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getLoginMutOpts(
  payload: TPayload,
  options?: TLoginMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getLoginMutKey(payload),
    mutationFn: (variables: TPayload) => client.api.auth.login(variables),
  };
}

/**
 * Хук для виклику мутації login.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TLoginMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TLoginMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useLoginMut(
 *   { email: 'hello@mail.com', password: '1234' },
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ email: 'hello@mail.com', password: '1234' });
 */
export default function useLoginMut(
  payload: TPayload,
  options?: TLoginMutOpt
): TLoginMut {
  const opts = getLoginMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}
