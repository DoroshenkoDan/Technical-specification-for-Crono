import { Link } from 'react-router';

import { performanceData } from './helpers/data';
import getCurrentMonthName from './helpers/getCurrentMonth';

import EditIcon from 'assets/Icons/HomePage/EditIcon';
import PerformanceItem from 'components/PerformanceItem/PerformanceItem';
import { Box } from 'ui/Box';

import s from './Performance.module.scss';

export default function Performance() {
  const currentMonth = getCurrentMonthName();

  return (
    <Box variant='rounded' className={s.Performance}>
      <div className={s.header}>
        <h2>{currentMonth}'s performance</h2>
        <Link to='/reports'>
          Edit KPIs <EditIcon />
        </Link>
      </div>
      <div className={s.content}>
        {performanceData.map((item) => (
          <PerformanceItem
            key={item.id}
            title={item.title}
            currentNumber={item.currentNumber}
            maxNumber={item.maxNumber}
            toolTipInfo={item.toolTipInfo}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </Box>
  );
}
