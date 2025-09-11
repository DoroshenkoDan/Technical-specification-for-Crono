import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  TSuccess,
  TParams,
  TError,
} from 'api/BlogClient/routes/blogs/getBlogById';
import { clientBlog } from 'api/index';

export type TGetBlogByIdQry = UseQueryResult<TSuccess, TError>;

export type TGetBlogByIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getBlogById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetBlogByIdKey = (params: TParams): Array<string | TParams> => [
  'blogs',
  'getBlogById',
  params,
];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getBlogById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetBlogByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetBlogByIdOpts(
  params: TParams,
  options?: TGetBlogByIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetBlogByIdKey(params),
    queryFn: ({ signal }) => clientBlog.api.blogs.getById(params, { signal }),
    enabled: Boolean(options?.enabled ?? params.article_id),
  };
}

/**
 * Хук для отримання даних getBlogById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetBlogByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetBlogByIdQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetBlogByIdQry(
 *   { id: 1 },
 *   { enabled: true, staleTime: 5000 }
 * );
 */
export default function useGetBlogByIdQry(
  params: TParams,
  options?: TGetBlogByIdOpts
): TGetBlogByIdQry {
  const opts = getGetBlogByIdOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
