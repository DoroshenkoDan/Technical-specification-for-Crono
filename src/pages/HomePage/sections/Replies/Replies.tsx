import { Avatar } from '@mui/material';
import { Link } from 'react-router';

import repliesImages from './data';

import { InboxIcon } from 'assets/Icons/DrawerMenu/components';
import { ArrowIcon } from 'assets/Icons/HomePage';
import { Box } from 'ui/Box';

import s from './Replies.module.scss';

export default function Replies() {
  const inBoxNumber = 24;
  return (
    <Box variant='rounded' className={s.Replies}>
      <div className={s.title}>
        <p>Replies</p>{' '}
        <Link to='/inbox'>
          Open inbox <ArrowIcon />
        </Link>
      </div>
      <div className={s.content}>
        <Avatar className={s.avatar}>
          <InboxIcon />
        </Avatar>
        <div className={s.inbox}>
          <span>{inBoxNumber}</span>
        </div>
        <div className={s.imagesContainer}>
          {repliesImages.map((item) => (
            <img key={item.id} src={item.src} alt='reply' />
          ))}
        </div>
      </div>
    </Box>
  );
}
