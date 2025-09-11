import React from 'react';

export type TMainLayoutSt = {
  aside: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
  auth: {
    isLogin: boolean;
    setIsLogin: (v: boolean) => void;
  };
};
