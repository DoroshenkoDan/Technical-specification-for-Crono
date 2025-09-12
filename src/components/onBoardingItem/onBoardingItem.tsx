import cn from 'classnames';

import s from './onBoardingItem.module.scss';

interface Props {
  className?: string;
  text: string;
  time: string;
  icon: string;
}

/**
 *  onBoardingItem
 *  @param className
 */

export default function onBoardingItem({
  className = '',
  icon,
  text,
  time,
}: Props) {
  return (
    <div className={cn(s.onBoardingItem, className)}>
      <div className={s.left}>
        <img src={icon} alt='icon' />
        <p>{text}</p>
      </div>
      <span className={s.time}>{time}</span>
    </div>
  );
}
