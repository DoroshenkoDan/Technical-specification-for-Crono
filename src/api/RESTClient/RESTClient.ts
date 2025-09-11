import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import AuthManager from 'local-auth-manager';

import BaseRESTClient from '../BaseRESTClient';

import { bindAllApi } from './api';

import { TJWT } from 'api/types';

/**
 * @class RESTClient
 * @category API
 * @alias BaseRESTClient
 * @inherits
 * @see https://github.com/axios/axios
 * @constructor
 * @classdesc
 */

export default class RESTClient extends BaseRESTClient {
  private isRefresh: boolean;
  public AM: AuthManager<TJWT>;
  private redirectPath: string;
  private readonly key;

  constructor(
    baseURL: string,
    key: string,
    version: string,
    redirectPath: string
  ) {
    super(`${baseURL}/${version}`);
    this.key = key;
    this.isRefresh = false;
    this.AM = new AuthManager<TJWT>({
      storageType: 'localStorage',
      tokenKey: `${this.key}-auth-manager`,
      parse: true,
      tokenValidator(token: TJWT): boolean {
        return (
          typeof token === 'object' && 'refresh' in token && 'access' in token
        );
      },
    });
    this.redirectPath = redirectPath;
    this.client.defaults.headers.common['Content-Type'] = 'application/json';

    // Додаємо перехоплювач для запитів
    this.client.interceptors.request.use(
      (request: InternalAxiosRequestConfig) => {
        if (this.AM.token?.access && !this.isRefresh)
          request.headers.Authorization = `Bearer ${this.AM.token?.access}`;
        return request;
      }
    );

    // Додаємо перехоплювач для відповідей
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        const originalRequest: InternalAxiosRequestConfig & {
          _retry?: boolean;
        } = error.config;
        // Якщо код відповіді 401 і запит ще не був повторений
        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          RESTClient.isTokenExpiredOrNotValid(error.response?.data)
        ) {
          originalRequest._retry = true; // Позначаємо, що вже робили спробу повторити цей запит
          await this.refreshToken();
          return this.client(originalRequest); // Повторно виконуємо запит
        }
        return Promise.reject(error);
      }
    );
  }

  // Метод для оновлення токену
  private async refreshToken() {
    if (this.isRefresh) return;
    this.isRefresh = true;

    try {
      // Оновлення токену за допомогою refresh-токена
      const token = this.AM.token;
      if (!token?.refresh) throw new Error('Відсутній refresh-токен');
      const res = await this.api.auth.refresh({ refresh: token.refresh });
      if (res?.data && this.AM.isValidToken(res.data)) {
        this.AM.login(res.data);
        this.client.defaults.headers.common.Authorization = `Bearer ${res.data.access}`; // Оновлюємо заголовок авторизації.
      }
    } catch (error: any) {
      if (RESTClient.isTokenExpiredOrNotValid(error)) {
        this.AM.logout(); // Очищення LocalStorage
        document.location.replace(this.redirectPath); // Редирект на вказаний шлях.
      }
    } finally {
      this.isRefresh = false;
    }
  }

  // Статичний метод для перевірки невалідності або закінчення токену
  static isTokenExpiredOrNotValid(data: any): boolean {
    return (
      data?.error === 'Token expired' ||
      data?.error === 'Invalid token' ||
      data.errors?.code === 'token_not_valid'
    );
  }

  // Перелік всіх методів API
  public readonly api = bindAllApi(this);
}
