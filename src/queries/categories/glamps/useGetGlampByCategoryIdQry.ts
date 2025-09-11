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
} from 'api/RESTClient/routes/categories/glamps/getGlampByCategoryId';

export type TGetGlampByCategoryIdQry = UseQueryResult<TSuccess, TError>;

export type TGetGlampByCategoryIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getGlampByCategoryId.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetGlampByCategoryIdKey = (
  params: TParams
): Array<string | TParams> => ['categories', 'getGlampByCategoryId', params];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getGlampByCategoryId.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetGlampByCategoryIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetGlampByCategoryIdOpts(
  params: TParams,
  options?: TGetGlampByCategoryIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetGlampByCategoryIdKey(params),
    queryFn: ({ signal }) =>
      client.api.categories.glamps.getById(params, { signal }),
    enabled: Boolean(options?.enabled ?? params.category_id),
  };
}

/**
 * Хук для отримання даних getGlampByCategoryId.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetGlampByCategoryIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetGlampByCategoryIdQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetGlampByCategoryIdQry(
 *   { category_id: 17, glamp_id: 219 },
 * );
 */
export default function useGetGlampByCategoryIdQry(
  params: TParams,
  options?: TGetGlampByCategoryIdOpts
): TGetGlampByCategoryIdQry {
  const opts = getGetGlampByCategoryIdOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
