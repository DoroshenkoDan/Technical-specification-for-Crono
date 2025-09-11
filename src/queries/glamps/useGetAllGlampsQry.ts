import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import client from 'api/index';
import { TError, TSuccess } from 'api/RESTClient/routes/glamps/getAllGlamps';
import { TListMeta } from 'api/RESTClient/types';
import { TGlamp } from 'types/TGlamp';

export type TGetAllGlampsQry = UseQueryResult<TSuccess, TError>;

export type TGetAllGlampsOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ для запиту getAllGlamps.
 *
 * @returns {Array<string>} - Унікальний ключ запиту.
 */
export const getGetAllGlampsKey = (): Array<string> => [
  'glamps',
  'getAllGlamps',
];

/**
 * Формує параметри для виклику `useQuery` при отриманні даних getAllGlamps.
 *
 * @param {TListMeta<TGlamp>} [params] - Параметри для запиту.
 * @param {TGetAllGlampsOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetAllGlampsOpts(
  params?: TListMeta<TGlamp>,
  options?: TGetAllGlampsOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetAllGlampsKey(),
    queryFn: ({ signal }) => client.api.glamps.getAll(params, { signal }),
  };
}

/**
 * Хук для отримання даних getAllGlamps.
 *
 * @param {TListMeta<TGlamp>} [params] - Параметри для запиту.
 * @param {TGetAllGlampsOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetAllGlampsQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetAllGlampsQry({
 *   page: 1,
 *   pageSize: 4,
 *   sorting: 'id:desc',
 *   filters: {
 *     id: {
 *       $eq: '1',
 *     },
 *   },
 * });
 */
export default function useGetAllGlampsQry(
  params?: TListMeta<TGlamp>,
  options?: TGetAllGlampsOpts
): TGetAllGlampsQry {
  const opts = getGetAllGlampsOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
