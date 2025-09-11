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
} from 'api/RESTClient/routes/glampOwners/registerGlampOwner';

export type TRegisterGlampOwnerMut = UseMutationResult<
  TSuccess,
  TError,
  TPayload
>;

export type TRegisterGlampOwnerMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для registerGlampOwner.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getRegisterGlampOwnerMutKey = (
  payload: TPayload
): Array<string | TPayload> => ['glampOwners', 'registerGlampOwner', payload];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту registerGlampOwner.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TRegisterGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getRegisterGlampOwnerMutOpts(
  payload: TPayload,
  options?: TRegisterGlampOwnerMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getRegisterGlampOwnerMutKey(payload),
    mutationFn: (variables: TPayload) =>
      client.api.glampOwners.register(variables),
  };
}

/**
 * Хук для виклику мутації registerGlampOwner.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TRegisterGlampOwnerMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TRegisterGlampOwnerMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useRegisterGlampOwnerMut(
 *   {
 *     user: { email: 'test@example.com', password: '123456', confirm_password: '123456' },
 *     first_name: 'John',
 *     last_name: 'Doe',
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
 *     phone: '+123456789'
 *   });
 */
export default function useRegisterGlampOwnerMut(
  payload: TPayload,
  options?: TRegisterGlampOwnerMutOpt
): TRegisterGlampOwnerMut {
  const opts = getRegisterGlampOwnerMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}
