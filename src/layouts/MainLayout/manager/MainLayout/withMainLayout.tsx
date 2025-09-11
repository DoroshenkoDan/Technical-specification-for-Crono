import React, { PropsWithChildren } from 'react';

import MainLayoutPrvd from './MainLayoutPrvd.tsx';

export default function withMainLayoutPrvd<P>(
  Component: React.ComponentType<PropsWithChildren<P>>
) {
  return (props: PropsWithChildren<P>) => {
    return (
      <MainLayoutPrvd>
        <Component {...props} />
      </MainLayoutPrvd>
    );
  };
}
