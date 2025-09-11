import React, { createContext, useCallback, useEffect } from 'react';

import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import useLocalStorage from 'use-local-storage';

import { DEFAULT_THEME_MANAGER_VALUE } from './constant.ts';
import useUserSystemTheme from './hooks/useUserSystemTheme.ts';
import { TThemeKey, TThemeManager } from './types.ts';

import './index.scss';

// The theme manager acts as an intermediary between scss and material ui and unites them
export const ThemeManagerContext = createContext<TThemeManager>(
  DEFAULT_THEME_MANAGER_VALUE
);

export default function ThemeManager({
  children,
  materialThemes,
  useSystemTheme = false,
  useClientTheme = false,
  defaultTheme = 'light',
  defaultKey = 'app-theme-key',
}: Props) {
  const userSystemKey = useUserSystemTheme(); // get user's system color
  const [userKey, setUserKey] = useLocalStorage<TThemeKey | null>(
    defaultKey,
    null
  );

  let key = defaultTheme;
  if (useClientTheme && userKey) key = userKey;
  else if (useSystemTheme && userSystemKey) key = userSystemKey as TThemeKey;

  // Change theme and assign class to body element (does not work with SSR)
  const setTheme = useCallback((v: TThemeKey | null) => {
    setUserKey((prev) => {
      if (v === null) return v;
      document.body.classList.replace(prev ?? key, v);
      return v;
    });
  }, []);

  useEffect(() => {
    document.body.classList.add(key); // Set default theme in body
  }, []);

  const value = {
    setTheme,
    current: key,
    themes: Object.keys(materialThemes),
  };

  return (
    <ThemeManagerContext.Provider value={value}>
      <ThemeProvider theme={materialThemes[key]}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeManagerContext.Provider>
  );
}

interface Props {
  children: React.ReactNode;
  defaultTheme?: TThemeKey; // Set default theme (default is light)
  defaultKey?: string; // Key for storage
  useSystemTheme?: boolean; // Set system theme (default is true)

  /*
   Set the theme selected by the user (default is true)
   has priority over useSystemTheme
   */
  useClientTheme?: boolean;

  // Object with themes where key is name, and value is material theme
  materialThemes: {
    [key in TThemeKey]: Theme;
  };
}
