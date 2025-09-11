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
} from 'api/RESTClient/routes/categories/getCategoryById';

export type TGetCategoryByIdQry = UseQueryResult<TSuccess, TError>;

export type TGetCategoryByIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getCategoryById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetCategoryByIdKey = (
  params: TParams
): Array<string | TParams> => ['categories', 'getCategoryById', params];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getCategoryById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetCategoryByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetCategoryByIdOpts(
  params: TParams,
  options?: TGetCategoryByIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetCategoryByIdKey(params),
    queryFn: ({ signal }) => client.api.categories.getById(params, { signal }),
    enabled: Boolean(options?.enabled ?? params.category_id),
  };
}

/**
 * Хук для отримання даних getCategoryById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetCategoryByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetCategoryByIdQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetCategoryByIdQry(
 *   { category_id: 1 },
 *   { enabled: true, staleTime: 5000 }
 * );
 */
export default function useGetCategoryByIdQry(
  params: TParams,
  options?: TGetCategoryByIdOpts
): TGetCategoryByIdQry {
  const opts = getGetCategoryByIdOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
