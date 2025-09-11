import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import { TSuccess, TError } from 'api/BlogClient/routes/blogs/getAllBlogs';
import { TListMeta } from 'api/BlogClient/types';
import { clientBlog } from 'api/index';
import { TArticlesBlog } from 'types/blog/TArticlesBlog';

export type TGetAllBlogsQry = UseQueryResult<TSuccess, TError>;

export type TGetAllBlogsOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ для запиту getAllBlogs.
 *
 * @returns {Array<string>} - Унікальний ключ запиту.
 */
export const getGetAllBlogsKey = (): Array<string> => ['blogs', 'getAllBlogs'];

/**
 * Формує параметри для виклику `useQuery` при отриманні даних getAllBlogs.
 *
 * @param {TListMeta<TArticlesBlog>} [params] - Параметри для запиту.
 * @param {TGetAllBlogsOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetAllBlogsOpts(
  params?: TListMeta<TArticlesBlog>,
  options?: TGetAllBlogsOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetAllBlogsKey(),
    queryFn: ({ signal }) => clientBlog.api.blogs.getAll(params, { signal }),
  };
}

/**
 * Хук для отримання даних getAllBlogs.
 *
 * @param {TListMeta<TArticlesBlog>} [params] - Параметри для запиту.
 * @param {TGetAllBlogsOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetAllBlogsQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetAllBlogsQry({
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
export default function useGetAllBlogsQry(
  params?: TListMeta<TArticlesBlog>,
  options?: TGetAllBlogsOpts
): TGetAllBlogsQry {
  const opts = getGetAllBlogsOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
