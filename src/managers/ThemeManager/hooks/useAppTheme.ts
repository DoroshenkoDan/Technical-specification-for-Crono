import { useContext } from 'react';

import { ThemeManagerContext } from '../ThemeManager.tsx';

export default function useAppTheme() {
  return useContext(ThemeManagerContext);
}
