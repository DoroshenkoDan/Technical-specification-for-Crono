import cn from 'classnames';
import { Link } from 'react-router';

import { ArrowIcon, ErrorIcon } from 'assets/Icons/HomePage';

import s from './TaskStatusItem.module.scss';

interface Props {
  className?: string;
  status: string;
  count: number;
  errors: number;
  backgroundColor: string;
  numberColor: string;
  path: string;
}

/**
 *  TaskStatusItem
 *  @param className
 *  @param status - Task status name
 *  @param count - Number of tasks
 *  @param errors - Number of errors
 *  @param backgroundColor - Background color for status
 *  @param numberColor - Color for the count number
 *  @param path - Navigation path
 */

export default function TaskStatusItem({
  className = '',
  status,
  count,
  errors,
  backgroundColor,
  numberColor,
  path,
}: Props) {
  return (
    <div
      className={cn(s.TaskStatusItem, className)}
      style={{ backgroundColor }}
    >
      {errors > 0 && (
        <div className={s.errorBadge}>
          <span>
            {errors} error{errors > 1 ? 's' : ''}
          </span>
          <ErrorIcon />
        </div>
      )}
      <div className={s.topRow}>
        <p className={s.count} style={{ color: numberColor }}>
          {count}
        </p>
      </div>
      <div className={s.bottomRow}>
        <span className={s.status}>{status}</span>
        <Link to={path} className={s.link}>
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
