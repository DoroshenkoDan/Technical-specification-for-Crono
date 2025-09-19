import { Box } from 'ui/Box';

import s from './Welcome.module.scss';

export default function Welcome() {
  return (
    <Box variant='rounded' className={s.Welcome}>
      <div className={s.content}>
        <h1>Welcome Alex,</h1>
        <p>
          Here’s your performance overview where you can track your daily and
          monthly KPIs
        </p>
      </div>
    </Box>
  );
}
