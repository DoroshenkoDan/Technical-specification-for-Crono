import OnBoarding from './sections/OnBoarding';
import Performance from './sections/Performance';
import Replies from './sections/Replies';
import Signals from './sections/Signals';
import TodayTask from './sections/TodayTask';
import Welcome from './sections/Welcome';

import s from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={s.HomePage}>
      <div className={s.grid1}>
        <div className={s.grid1_1}>
          <Welcome />
          <Replies />
        </div>
        <TodayTask />
      </div>
      <div className={s.grid2}>
        <Performance />
      </div>
      <div className={s.grid3}>
        <OnBoarding />
      </div>
      <div className={s.grid4}>
        <Signals />
      </div>
    </div>
  );
}
