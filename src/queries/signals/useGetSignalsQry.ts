import {
  useQuery,
  UseQueryResult,
  UndefinedInitialDataOptions,
} from '@tanstack/react-query';

import api from 'api/index';
import { TSignal, TResponse } from 'api/RESTClient/types';

export type TGetSignalsQry = UseQueryResult<TSignal[], Error>;

export type TGetSignalsOpts = Omit<
  UndefinedInitialDataOptions<TSignal[], Error>,
  'queryKey' | 'queryFn'
>;

/**
 * Query for fetching all signals
 */
export function useGetSignalsQry(opts?: TGetSignalsOpts): TGetSignalsQry {
  return useQuery({
    queryKey: ['signals'],
    queryFn: async (): Promise<TSignal[]> => {
      const response: TResponse<TSignal[]> = await api.getSignals();

      if (response.status === 'Error') {
        throw new Error(response.message);
      }

      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 хвилин
    ...opts,
  });
}
