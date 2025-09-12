import React from 'react';

import cn from 'classnames';

import s from './DrawerMenuList.module.scss';

interface Props {
  className?: string;
}

/**
 *  DrawerMenuList
 *  @param className
 */

export default function DrawerMenuList({ className = '' }: Props) {
  return <div className={cn(s.DrawerMenuList, className)}></div>;
}
