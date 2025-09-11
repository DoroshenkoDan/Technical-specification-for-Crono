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
} from 'api/RESTClient/routes/tourists/getTouristById';

export type TGetTouristByIdQry = UseQueryResult<TSuccess, TError>;

export type TGetTouristByIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getTouristById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetTouristByIdKey = (
  params: TParams
): Array<string | TParams> => ['tourists', 'getTouristById', params];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getTouristById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetTouristByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetTouristByIdOpts(
  params: TParams,
  options?: TGetTouristByIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetTouristByIdKey(params),
    queryFn: ({ signal }) => client.api.tourists.getById(params, { signal }),
    enabled: Boolean(options?.enabled ?? params.tourist_id),
  };
}

/**
 * Хук для отримання даних getTouristById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetTouristByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetTouristByIdQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetTouristByIdQry({ id: 1 });
 */
export default function useGetTouristByIdQry(
  params: TParams,
  options?: TGetTouristByIdOpts
): TGetTouristByIdQry {
  const opts = getGetTouristByIdOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
