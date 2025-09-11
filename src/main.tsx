import React from 'react';
import './index.scss';

import { StyledEngineProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client'; // The function from react-dom/client to create a root React DOM container.

import App from './App.tsx'; // The root application component.
import ThemeManager from './managers/ThemeManager';
import { light } from './mui-theme.ts';

// default theme name (string)
// const defaultTheme = String(process.env.REACT_APP_DEFAULT_THEME);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Не оновлювати автоматично при фокусі
      staleTime: Number(process.env.REACT_APP_DEFAULT_CACHE_EXPIRATION), // Глобальне кешування (40 хвилин)
    },
  },
});

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider enableCssLayer>
      <ThemeManager
        materialThemes={{
          light,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </QueryClientProvider>
      </ThemeManager>
    </StyledEngineProvider>
  </React.StrictMode>
);
