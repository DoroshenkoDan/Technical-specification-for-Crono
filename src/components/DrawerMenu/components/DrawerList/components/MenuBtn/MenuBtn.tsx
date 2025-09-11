import React from 'react';

import { Badge } from '@mui/material';
import cn from 'classnames';
import { Link } from 'react-router';

import PrefixIcon from '../../../../../../assets/Icons/DrawerMenu/components/Prefix';

import s from './MenuBtn.module.scss';

interface Props {
  className?: string;
  icon: React.ComponentType<{
    color?: string;
    size?: number;
    className?: string;
  }>;
  text: string;
  link: string;
  badge?: number;
  iconColor?: string;
  selected?: boolean;
}

/**
 *  MenuBtn
 *  @param className
 */

export default function MenuBtn({
  className = '',
  icon: IconComponent,
  text,
  link,
  badge,
  iconColor,
  selected = false,
}: Props) {
  const currentIconColor = selected
    ? 'var(--accent-primary)'
    : iconColor || 'var(--text)';

  const linkContent = (
    <Link
      className={cn(s.MenuBtn, { [s.selected]: selected }, className)}
      to={link}
    >
      <PrefixIcon className={s.prefixIcon} />
      <IconComponent color={currentIconColor} size={20} />
      <span>{text}</span>
    </Link>
  );

  return badge && badge > 0 ? (
    <Badge
      badgeContent={badge}
      slotProps={{
        badge: { className: s.CustomBadge },
        root: { className: s.BadgeRoot },
      }}
    >
      {linkContent}
    </Badge>
  ) : (
    linkContent
  );
}
