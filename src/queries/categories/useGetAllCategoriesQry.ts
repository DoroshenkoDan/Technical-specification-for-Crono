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
} from 'api/RESTClient/routes/categories/getAllCategories';
import { TListMeta } from 'api/RESTClient/types';
import { TCategory } from 'types/TCategory';

export type TGetAllCategoriesQry = UseQueryResult<TSuccess, TError>;

export type TGetAllCategoriesOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ для запиту getAllCategories.
 *
 * @returns {Array<string>} - Унікальний ключ запиту.
 */
export const getGetAllCategoriesKey = (): Array<string> => [
  'categories',
  'getAllCategories',
];

/**
 * Формує параметри для виклику `useQuery` при отриманні даних getAllCategories.
 *
 * @param {TListMeta<TCategory>} [params] - Параметри для запиту.
 * @param {TGetAllCategoriesOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetAllCategoriesOpts(
  params?: TListMeta<TCategory>,
  options?: TGetAllCategoriesOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetAllCategoriesKey(),
    queryFn: ({ signal }) => client.api.categories.getAll(params, { signal }),
  };
}

/**
 * Хук для отримання даних getAllCategories.
 *
 * @param {TListMeta<TCategory>} [params] - Параметри для запиту.
 * @param {TGetAllCategoriesOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetAllCategoriesQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetAllCategoriesQry();
 */
export default function useGetAllCategoriesQry(
  params?: TListMeta<TCategory>,
  options?: TGetAllCategoriesOpts
): TGetAllCategoriesQry {
  const opts = getGetAllCategoriesOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
