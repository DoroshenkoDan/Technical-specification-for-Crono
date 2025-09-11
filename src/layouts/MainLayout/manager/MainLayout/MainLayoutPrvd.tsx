import React from 'react';

import MainLayoutCtx from './MainLayoutCtx.ts';
import useInitialSt from './useInitialSt.ts';

interface TMainLayoutPrvdProps {
  children: React.ReactNode;
}

export default function MainLayoutPrvd({ children }: TMainLayoutPrvdProps) {
  const value = useInitialSt();
  return (
    <MainLayoutCtx.Provider value={value}>{children}</MainLayoutCtx.Provider>
  );
}
