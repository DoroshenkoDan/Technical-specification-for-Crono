import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import client from 'api/index';
import {
  TSuccess,
  TParams,
  TError,
} from 'api/RESTClient/routes/users/getUserById';

export type TGetUserByIdQry = UseQueryResult<TSuccess, TError>;

export type TGetUserByIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getUserById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetUserByIdKey = (params: TParams): Array<string | TParams> => [
  'users',
  'getUserById',
  params,
];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getUserById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetUserByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetUserByIdOpts(
  params: TParams,
  options?: TGetUserByIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetUserByIdKey(params),
    queryFn: ({ signal }) => client.api.users.getById(params, { signal }),
    enabled: Boolean(options?.enabled ?? params.user_id),
  };
}

/**
 * Хук для отримання даних getUserById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetUserByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetUserByIdQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetUserByIdQry({ user_id: 1 });
 */
export default function useGetUserByIdQry(
  params: TParams,
  options?: TGetUserByIdOpts
): TGetUserByIdQry {
  const opts = getGetUserByIdOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
