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
} from 'api/RESTClient/routes/glamps/getGlampById';

export type TGetGlampByIdQry = UseQueryResult<TSuccess, TError>;

export type TGetGlampByIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getGlampById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetGlampByIdKey = (
  params: TParams
): Array<string | TParams> => ['glamps', 'getGlampById', params];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getGlampById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetGlampByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetGlampByIdOpts(
  params: TParams,
  options?: TGetGlampByIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetGlampByIdKey(params),
    queryFn: ({ signal }) => client.api.glamps.getById(params, { signal }),
    enabled: Boolean(options?.enabled ?? params.glamp_id),
  };
}

/**
 * Хук для отримання даних getGlampById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetGlampByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetGlampByIdQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetGlampByIdQry(
 *   { id: 1 },
 *   { enabled: true, staleTime: 5000 }
 * );
 */
export default function useGetGlampByIdQry(
  params: TParams,
  options?: TGetGlampByIdOpts
): TGetGlampByIdQry {
  const opts = getGetGlampByIdOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
