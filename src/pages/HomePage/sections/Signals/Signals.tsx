import { Badge } from '@mui/material';

import SignalsItem from 'components/SignalsItem/SignalsItem';
import { useGetSignalsQry } from 'queries/signals';
import { Box } from 'ui/Box';

import s from './Signals.module.scss';

export default function Signals() {
  const { data: signals, isLoading, error } = useGetSignalsQry();

  const countSignals = signals?.length || 0;

  return (
    <Box variant='rounded' className={s.Signals}>
      <div className={s.header}>
        <Badge
          badgeContent={countSignals}
          slotProps={{ badge: { className: s.CustomBadge } }}
          className={s.BadgeRoot}
        >
          <h2 className={s.title}>Signals</h2>
        </Badge>
        <p className={s.subtitle}>
          Never miss a single opportunity: check out your top signals from your
          1st-degree LinkedIn connections.
        </p>
      </div>
      <div className={s.contentWrapper}>
        {isLoading && <p>Loading signals...</p>}

        {error && <p>Error loading signals: {error.message}</p>}

        {signals && signals.length > 0
          ? signals.map((signal) => (
              <div key={signal.id} className={s.content}>
                <SignalsItem
                  title={signal.title}
                  actionType={signal.actionType}
                  auto={signal.auto}
                  img={signal.image}
                  id={signal.id}
                  date={signal.date}
                />
              </div>
            ))
          : !isLoading && !error && <p>There are no signals at the moment</p>}
      </div>
    </Box>
  );
}
