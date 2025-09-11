import axios, { AxiosInstance } from 'axios';

/**
 * @class BaseRESTClient
 * @category API
 * @alias BaseRESTClient
 * @see https://github.com/axios/axios
 * @description
 * @classdesc
 * Базовий клас для створення REST-клієнта.
 */
export default class BaseRESTClient {
  protected client: AxiosInstance;
  protected BASE_URL: string;

  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
    this.client = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  /**
   * Встановлює заголовок
   * @param name {string} назва заголовка
   * @param value {string} значення, яке потрібно встановити
   */
  setHeader(name: string, value: string) {
    if (value) {
      this.client.defaults.headers.common[name] = value;
    }
  }

  /**
   * Видаляє заголовок
   * @param name {string} назва заголовка, який потрібно видалити
   */
  removeHeader(name: string) {
    if (name) {
      delete this.client.defaults.headers.common[name];
    }
  }
}
