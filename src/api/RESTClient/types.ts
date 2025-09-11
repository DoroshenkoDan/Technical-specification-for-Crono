export interface TResponseSuccess<T = null> {
  message: string;
  statusCode?: number;
  status: 'OK';
  data: T;
}

export interface TResponseError {
  message: string;
  statusCode?: number;
  status: 'Error';
  data?: null;
  errors?: {
    [k: string]: string;
  };
}

export type TResponse<T = undefined> = TResponseSuccess<T> | TResponseError;

export type TFilterOperator =
  | '$eq' // Рівний
  | '$eqi' // Рівно (без врахування регістру)
  | '$lt' // Менше, ніж
  | '$lte' // Менше або рівно
  | '$gt' // Більше ніж
  | '$gte' // Більше або рівно
  | '$in' // Входить в масив
  | '$contains' // Містить
  | '$icontains' // Містить (без врахування регістру)
  | '$null' // null
  | '$startswith' // Починається з
  | '$startsWithi' // Починається з (без врахування регістру)
  | '$endsWith' // Закінчується на
  | '$endsWithi'; // Закінчується на (без врахування регістру)

export type TAPIFilters<T> = {
  [K in keyof T]?: {
    [o in TFilterOperator]?: string;
  };
};

// Тип, який представляє ключі інтерфейсу TListMeta<T>.
export type TMetaParamsKeys = keyof TListMeta<any>;

export interface TListMeta<T> {
  page?: number; // Номер поточної сторінки
  pageSize?: number; // Кількість елементів на сторінці
  sorting?: string; // Сортування за спаданням desc або за зростанням asc
  filters?: TAPIFilters<T>; // Фільтри для даних
}
