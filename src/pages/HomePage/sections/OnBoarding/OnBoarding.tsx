import { onBoardingData } from './helpers/data';

import OnBoardingItem from 'components/onBoardingItem/onBoardingItem';
import { Box } from 'ui/Box';

import s from './OnBoarding.module.scss';

export default function OnBoarding() {
  return (
    <Box variant='rounded' className={s.OnBoarding}>
      <h2 className={s.tittle}>Onboarding</h2>
      <div className={s.content}>
        {onBoardingData.map((item) => (
          <OnBoardingItem
            key={item.id}
            icon={item.iconPath}
            text={item.text}
            time={item.duration}
          />
        ))}
      </div>
    </Box>
  );
}
