import { useContext, useState } from 'react';

import MainLayoutCtx from './MainLayoutCtx.ts';
import { TMainLayoutSt } from './types.ts';

import client from 'api/index.ts';

export const useMainLayout = () => useContext(MainLayoutCtx);

export default function useInitialSt(): TMainLayoutSt {
  const [opened, setOpened] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(!!client.AM.token);

  return {
    aside: {
      opened,
      setOpened,
    },
    auth: {
      isLogin,
      setIsLogin,
    },
  };
}
