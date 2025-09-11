// Імітація даних з бекенду
export interface TaskStatusFromBackend {
  status: string;
  count: number;
  errors: number;
}

// Дані, які приходять з бекенду
export const taskStatusData: TaskStatusFromBackend[] = [
  {
    status: 'Overdue',
    count: 3,
    errors: 0,
  },
  {
    status: 'Manual',
    count: 10,
    errors: 0,
  },
  {
    status: 'Auto',
    count: 20,
    errors: 1,
  },
  {
    status: 'Completed',
    count: 8,
    errors: 0,
  },
];

export const statusConfig = {
  Overdue: {
    backgroundColor: 'var(--bg-accent-red)',
    numberColor: 'var(--error)',
    path: '/tasks/overdue',
  },
  Manual: {
    backgroundColor: 'var(--bg-accent-yellow)',
    numberColor: 'var(--warning)',
    path: '/tasks/manual',
  },
  Auto: {
    backgroundColor: 'var(--bg-accent-blue)',
    numberColor: 'var(--info)',
    path: '/tasks/auto',
  },
  Completed: {
    backgroundColor: 'var(--bg-accent-green)',
    numberColor: 'var(--success)',
    path: '/tasks/completed',
  },
};
