import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import client from 'api/index';
import { TSuccess, TError } from 'api/RESTClient/routes/users/getCurrentUser';

export type TGetCurrentUserQry = UseQueryResult<TSuccess, TError>;

export type TGetCurrentUserOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ для запиту getCurrentUser.
 *
 * @returns {Array<string>} - Унікальний ключ запиту.
 */
export const getGetCurrentUserKey = (): Array<string> => [
  'users',
  'getCurrentUser',
];

/**
 * Формує параметри для виклику `useQuery` при отриманні даних getCurrentUser.
 *
 * @param {TGetCurrentUserOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetCurrentUserOpts(
  options?: TGetCurrentUserOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetCurrentUserKey(),
    queryFn: ({ signal }) => client.api.users.getCurrentUser({ signal }),
  };
}

/**
 * Хук для отримання даних getCurrentUser.
 *
 * @param {TGetCurrentUserOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetCurrentUserQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetCurrentUserQry();
 */
export default function useGetCurrentUserQry(
  options?: TGetCurrentUserOpts
): TGetCurrentUserQry {
  const opts = getGetCurrentUserOpts(options);
  return useQuery<TSuccess, TError>(opts);
}
