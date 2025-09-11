// Получаем тему системы пользователя

export default function useUserSystemTheme(): 'light' | 'dark' | null {
  try {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  } catch (e) {
    return null;
  }
}
