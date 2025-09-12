export interface TSignal {
  id: string;
  date: string;
  image: string;
  actionType: 'roleChange' | 'companyChange' | 'websiteView';
  auto: boolean;
  title: string;
  additionalInfo?: string | null;
}

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
