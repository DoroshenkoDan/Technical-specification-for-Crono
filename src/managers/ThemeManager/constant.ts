import { TThemeKey, TThemeManager } from './types.ts';

export const DEFAULT_THEME_MANAGER_VALUE: TThemeManager = {
  setTheme: (_v: TThemeKey) => {},
  current: 'light',
  themes: ['light'],
};
