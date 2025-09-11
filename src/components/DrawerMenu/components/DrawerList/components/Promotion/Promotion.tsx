import cn from 'classnames';
import { Link } from 'react-router';

import { PromotionIcon } from 'assets/Icons/DrawerMenu/components';

import s from './Promotion.module.scss';

interface Props {
  className?: string;
}

/**
 *  Promotion
 *  @param className
 */

export default function Promotion({ className = '' }: Props) {
  return (
    <div className={cn(s.Promotion, className)}>
      <p className={s.text}>Trial ends in 2 days</p>
      <Link to='/pricing' className={s.link}>
        <span>Upgrade Now</span>
        <PromotionIcon className={s.promotionIcon} />
      </Link>
    </div>
  );
}
