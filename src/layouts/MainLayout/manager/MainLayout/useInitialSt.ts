import { useContext, useState } from 'react';

import MainLayoutCtx from './MainLayoutCtx.ts';
import { TMainLayoutSt } from './types.ts';

export const useMainLayout = () => useContext(MainLayoutCtx);

export default function useInitialSt(): TMainLayoutSt {
  const [opened, setOpened] = useState<boolean>(false);
  // Тимчасово встановлюємо isLogin як true, оскільки видалили аутентифікацію
  const [isLogin, setIsLogin] = useState<boolean>(true);

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
