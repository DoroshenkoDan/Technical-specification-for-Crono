import { Outlet } from 'react-router';

import withMainLayoutPrvd from './manager/MainLayout/withMainLayout';

import DrawerMenu from 'components/DrawerMenu';

import s from './MainLayout.module.scss';

/**
 *  MainLayout
 */

function MainLayout() {
  return (
    <main className={s.MainLayout}>
      <DrawerMenu />
      <div className={s.inner}>
        <Outlet />
      </div>
    </main>
  );
}
export default withMainLayoutPrvd(MainLayout);
