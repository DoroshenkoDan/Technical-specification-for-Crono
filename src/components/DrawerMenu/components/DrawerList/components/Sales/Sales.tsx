import { Avatar } from '@mui/material';
import cn from 'classnames';

import { FlashIcon } from 'assets/Icons/DrawerMenu/components';

import s from './Sales.module.scss';

interface Props {
  className?: string;
}

/**
 *  Sales
 *  @param className
 */

export default function Sales({ className = '' }: Props) {
  return (
    <div className={cn(s.Sales, className)}>
      <Avatar className={s.avatar}>
        <FlashIcon />
      </Avatar>
      <div className={s.text}>
        <p>William Robertson</p>
        <p>Sales</p>
      </div>
    </div>
  );
}
