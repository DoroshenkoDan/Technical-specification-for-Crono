import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

import api from 'api/index';
import { TResponse } from 'api/RESTClient/types';
import { TSignal } from 'api/RESTClient/types';

export type TDeleteSignalMut = UseMutationResult<
  TResponse<null>,
  Error,
  string,
  { previousSignals: TSignal[] | undefined }
>;

export function useDeleteSignalMut(): TDeleteSignalMut {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (signalId: string): Promise<TResponse<null>> => {
      const response = await api.deleteSignal(signalId);

      if (response.status === 'Error') {
        throw new Error(response.message);
      }

      return response;
    },
    onMutate: async (signalId: string) => {
      await queryClient.cancelQueries({ queryKey: ['signals'] });

      const previousSignals = queryClient.getQueryData<TSignal[]>(['signals']);

      if (previousSignals) {
        const updatedSignals = previousSignals.filter(
          (signal) => signal.id !== signalId
        );
        queryClient.setQueryData(['signals'], updatedSignals);
      }

      return { previousSignals };
    },
    onError: (_err, _signalId, context) => {
      if (context?.previousSignals) {
        queryClient.setQueryData(['signals'], context.previousSignals);
      }
    },
  });
}
