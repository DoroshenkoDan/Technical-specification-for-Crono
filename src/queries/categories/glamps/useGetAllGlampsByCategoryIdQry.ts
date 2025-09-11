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
} from 'api/RESTClient/routes/categories/glamps/getAllGlampsByCategoryId';
import { TListMeta } from 'api/RESTClient/types';
import { TGlamp } from 'types/TGlamp';

export type TGetAllGlampsByCategoryIdQry = UseQueryResult<TSuccess, TError>;

export type TGetAllGlampsByCategoryIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getAllGlampsByCategoryId.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetAllGlampsByCategoryIdKey = (
  params: TParams
): Array<string | TParams> => [
  'categories',
  'getAllGlampsByCategoryId',
  params,
];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getAllGlampsByCategoryId.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TListMeta<TGlamp>} [paramsQry] - Додаткові параметри для запиту.
 * @param {TGetAllGlampsByCategoryIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetAllGlampsByCategoryIdOpts(
  params: TParams,
  paramsQry?: TListMeta<TGlamp>,
  options?: TGetAllGlampsByCategoryIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetAllGlampsByCategoryIdKey(params),
    queryFn: ({ signal }) =>
      client.api.categories.glamps.getAll(params, paramsQry, { signal }),
    enabled: Boolean(options?.enabled ?? params.category_id),
  };
}

/**
 * Хук для отримання даних getAllGlampsByCategoryId.
 *
 * @param {TListMeta<TGlamp>} [paramsQry] - Додаткові параметри для запиту.
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetAllGlampsByCategoryIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetAllGlampsByCategoryIdQry} - Результат запиту.
 *
 * @example
 *  const { data, isLoading, isError } = useGetAllGlampsByCategoryIdQry(
 *  { category_id: 17 },
 *  { page: 1,
 *    pageSize: 4,
 *    sorting: 'id:desc',
 *    filters: {
 *      id: {
 *        $eq: '1',
 *      },
 *    },
 *   });
 *  }
 */
export default function useGetAllGlampsByCategoryIdQry(
  params: TParams,
  paramsQry?: TListMeta<TGlamp>,
  options?: TGetAllGlampsByCategoryIdOpts
): TGetAllGlampsByCategoryIdQry {
  const opts = getGetAllGlampsByCategoryIdOpts(params, paramsQry, options);
  return useQuery<TSuccess, TError>(opts);
}
