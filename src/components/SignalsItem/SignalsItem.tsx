import { Badge } from '@mui/material';
import cn from 'classnames';

import getActionClass from './helpers/getActionClass';
import getActionText from './helpers/getActionText';
import SignalDropDown from './sections/SignalDropDown';
import { ActionType } from './types';

import s from './SignalsItem.module.scss';

interface Props {
  className?: string;
  title: string;
  actionType: ActionType;
  auto?: boolean;
  img: string;
  id: string;
  date: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

/**
 *  SignalsItem
 *  @param className
 */

export default function SignalsItem({
  className = '',
  title,
  actionType,
  auto,
  img,
  id: _id,
  date,
}: Props) {
  const actionText = getActionText(actionType);
  const actionClass = getActionClass(actionType);
  const formattedDate = formatDate(date);

  return (
    <div className={cn(s.SignalsItem, className)}>
      <div className={s.content}>
        <Badge variant='dot' slotProps={{ badge: { className: s.dotBadge } }}>
          <img src={img} alt='Signal' />
        </Badge>
        <div>
          <div dangerouslySetInnerHTML={{ __html: title }} />
          <div>
            <span className={cn(actionClass, s.actionText)}>{actionText}</span>
            {auto && <span className={s.autoTag}>In sequence</span>}
          </div>
        </div>
      </div>
      <div className={s.actionWrapper}>
        <p className={s.date}>{formattedDate}</p>
        <SignalDropDown id={_id} />
      </div>
    </div>
  );
}
