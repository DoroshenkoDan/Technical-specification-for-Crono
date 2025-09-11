import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import cn from 'classnames';
import { useLocation } from 'react-router';

import MenuBtn from './components/MenuBtn';
import Promotion from './components/Promotion';
import Sales from './components/Sales';
import { navigationData } from './data';

import { ArrowsIcon } from 'assets/Icons/DrawerMenu/components';

import s from './DrawerList.module.scss';

interface Props {
  className?: string;
}

/**
 *  DrawerList
 *  @param className
 */

export default function DrawerList({ className = '' }: Props) {
  const location = useLocation();

  return (
    <Box sx={{ width: 192 }} className={cn(s.DrawerList, className)}>
      <Button className={s.logoButton}>
        <img src='/icons/Crono_Logo.svg' alt='Menu' />
        <div className={s.arrowWrapper}>
          <ArrowsIcon className={s.arrowIcon} />
        </div>
      </Button>
      <div className={s.content}>
        <div className={s.navigation}>
          {navigationData.map((item) => (
            <MenuBtn
              key={item.link}
              icon={item.icon}
              text={item.text}
              link={item.link}
              badge={item.badge === undefined ? 0 : item.badge}
              selected={location.pathname === item.link}
            />
          ))}
        </div>
        <Promotion />
      </div>
      <div className={s.sales}>
        <Sales />
      </div>
    </Box>
  );
}
