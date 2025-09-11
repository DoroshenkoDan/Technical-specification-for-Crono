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
} from 'api/RESTClient/routes/tourists/getAllTourists';

export type TGetAllTouristsQry = UseQueryResult<TSuccess, TError>;

export type TGetAllTouristsOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ для запиту getAllTourists.
 *
 * @returns {Array<string>} - Унікальний ключ запиту.
 */
export const getGetAllTouristsKey = (): Array<string> => [
  'tourists',
  'getAllTourists',
];

/**
 * Формує параметри для виклику `useQuery` при отриманні даних getAllTourists.
 *
 * @param {TGetAllTouristsOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetAllTouristsOpts(
  options?: TGetAllTouristsOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetAllTouristsKey(),
    queryFn: ({ signal }) => client.api.tourists.getAll({ signal }),
  };
}

/**
 * Хук для отримання даних getAllTourists.
 *
 * @param {TGetAllTouristsOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetAllTouristsQry} - Результат запиту.
 *w
 * @example
 * const { data, isLoading, isError } = useGetAllTouristsQry();
 */
export default function useGetAllTouristsQry(
  options?: TGetAllTouristsOpts
): TGetAllTouristsQry {
  const opts = getGetAllTouristsOpts(options);
  return useQuery<TSuccess, TError>(opts);
}
