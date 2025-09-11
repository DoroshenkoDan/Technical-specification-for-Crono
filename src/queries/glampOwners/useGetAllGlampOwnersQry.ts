import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import client from 'api/index';
import {
  TSuccess,
  TError,
} from 'api/RESTClient/routes/glampOwners/getAllGlampOwners';

export type TGetAllGlampOwnersQry = UseQueryResult<TSuccess, TError>;

export type TGetAllGlampOwnersOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ для запиту getAllGlampOwners.
 *
 * @returns {Array<string>} - Унікальний ключ запиту.
 */
export const getGetAllGlampOwnersKey = (): Array<string> => [
  'glampOwners',
  'getAllGlampOwners',
];

/**
 * Формує параметри для виклику `useQuery` при отриманні даних getAllGlampOwners.
 *
 * @param {TGetAllGlampOwnersOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetAllGlampOwnersOpts(
  options?: TGetAllGlampOwnersOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetAllGlampOwnersKey(),
    queryFn: ({ signal }) => client.api.glampOwners.getAll({ signal }),
  };
}

/**
 * Хук для отримання даних getAllGlampOwners.
 *
 * @param {TGetAllGlampOwnersOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetAllGlampOwnersQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetAllGlampOwnersQry();
 */
export default function useGetAllGlampOwnersQry(
  options?: TGetAllGlampOwnersOpts
): TGetAllGlampOwnersQry {
  const opts = getGetAllGlampOwnersOpts(options);
  return useQuery<TSuccess, TError>(opts);
}
