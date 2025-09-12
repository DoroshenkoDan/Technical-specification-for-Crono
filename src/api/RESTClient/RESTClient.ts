import { TSignal, TResponse } from './types';

/**
 * @class RESTClient
 * @category API
 * @classdesc Simple REST client for signals data
 */

export default class RESTClient {
  private baseURL: string;

  constructor() {
    this.baseURL = '/signalData.json';
  }

  /**
   * Get all signals
   */
  async getSignals(): Promise<TResponse<TSignal[]>> {
    try {
      const response = await fetch(this.baseURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: TSignal[] = await response.json();

      return {
        status: 'OK',
        message: 'Signals retrieved successfully',
        statusCode: 200,
        data,
      };
    } catch (error) {
      return {
        status: 'Error',
        message:
          error instanceof Error ? error.message : 'Failed to fetch signals',
        statusCode: 500,
        data: null,
      };
    }
  }

  /**
   * Delete signal by ID
   */
  async deleteSignal(id: string): Promise<TResponse<null>> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        status: 'OK',
        message: `Signal with id ${id} deleted successfully`,
        statusCode: 200,
        data: null,
      };
    } catch (error) {
      return {
        status: 'Error',
        message:
          error instanceof Error ? error.message : 'Failed to delete signal',
        statusCode: 500,
        data: null,
      };
    }
  }
}
