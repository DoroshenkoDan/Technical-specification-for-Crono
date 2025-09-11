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
} from 'api/RESTClient/routes/glamps/registerGlamp';

export type TRegisterGlampMut = UseMutationResult<TSuccess, TError, TPayload>;

export type TRegisterGlampMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для registerGlamp.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getRegisterGlampMutKey = (
  payload: TPayload
): Array<string | TPayload> => ['glamps', 'registerGlamp', payload];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту registerGlamp.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TRegisterGlampMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getRegisterGlampMutOpts(
  payload: TPayload,
  options?: TRegisterGlampMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getRegisterGlampMutKey(payload),
    mutationFn: (variables: TPayload) => client.api.glamps.register(variables),
  };
}

/**
 * Хук для виклику мутації registerGlamp.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TRegisterGlampMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TRegisterGlampMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useRegisterGlampMut(
 *   glampRegObj,
 *   {
 *     onSuccess: (data) => console.log('Mutation success:', data),
 *     onError: (error) => console.error('Mutation error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate(glampRegObj);
 */
export default function useRegisterGlampMut(
  payload: TPayload,
  options?: TRegisterGlampMutOpt
): TRegisterGlampMut {
  const opts = getRegisterGlampMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}
