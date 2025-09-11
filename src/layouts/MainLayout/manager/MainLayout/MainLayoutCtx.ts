import { createContext } from 'react';

import { TMainLayoutSt } from './types.ts';

export const MainLayoutCtx = createContext<TMainLayoutSt>({
  aside: {
    opened: false,
    setOpened: () => {},
  },
  auth: {
    isLogin: false,
    setIsLogin: () => {},
  },
});

export default MainLayoutCtx;
