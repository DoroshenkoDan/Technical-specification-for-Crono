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
} from 'api/RESTClient/routes/glampOwners/getGlampOwnerById';

export type TGetGlampOwnerByIdQry = UseQueryResult<TSuccess, TError>;

export type TGetGlampOwnerByIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getGlampOwnerById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetGlampOwnerByIdKey = (
  params: TParams
): Array<string | TParams> => ['glampOwners', 'getGlampOwnerById', params];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getGlampOwnerById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetGlampOwnerByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetGlampOwnerByIdOpts(
  params: TParams,
  options?: TGetGlampOwnerByIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetGlampOwnerByIdKey(params),
    queryFn: ({ signal }) => client.api.glampOwners.getById(params, { signal }),
    enabled: Boolean(options?.enabled ?? params.glamp_owner_id),
  };
}

/**
 * Хук для отримання даних getGlampOwnerById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetGlampOwnerByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetGlampOwnerByIdQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetGlampOwnerByIdQry({ glamp_owner_id: 1 });
 */
export default function useGetGlampOwnerByIdQry(
  params: TParams,
  options?: TGetGlampOwnerByIdOpts
): TGetGlampOwnerByIdQry {
  const opts = getGetGlampOwnerByIdOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
