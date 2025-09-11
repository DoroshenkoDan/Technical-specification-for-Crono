import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import client from 'api/index';
import { TSuccess, TError } from 'api/RESTClient/routes/users/getAllUsers';

export type TGetAllUsersQry = UseQueryResult<TSuccess, TError>;

export type TGetAllUsersOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ для запиту getAllUsers.
 *
 * @returns {Array<string>} - Унікальний ключ запиту.
 */
export const getGetAllUsersKey = (): Array<string> => ['users', 'getAllUsers'];

/**
 * Формує параметри для виклику `useQuery` при отриманні даних getAllUsers.
 *
 * @param {TGetAllUsersOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetAllUsersOpts(
  options?: TGetAllUsersOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetAllUsersKey(),
    queryFn: ({ signal }) => client.api.users.getAll({ signal }),
  };
}

/**
 * Хук для отримання даних getAllUsers.
 *
 * @param {TGetAllUsersOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetAllUsersQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetAllUsersQry();
 */
export default function useGetAllUsersQry(
  options?: TGetAllUsersOpts
): TGetAllUsersQry {
  const opts = getGetAllUsersOpts(options);
  return useQuery<TSuccess, TError>(opts);
}
