import Replies from './sections/Replies';
import TodayTask from './sections/TodayTask';
import Welcome from './sections/Welcome';

import s from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={s.HomePage}>
      <Welcome />
      <Replies />
      <TodayTask />
    </div>
  );
}
