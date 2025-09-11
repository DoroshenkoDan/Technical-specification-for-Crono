// 📌 Обʼєкт події
export interface TEventLog {
  id: number;
  user_id: number;
  user_email: string;
  instance: string;
  operation_type: number;
  timestamp: string;
}

// 📌 Список подій (з пагінацією)
export interface TListEventLogs {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TEventLog[];
}
