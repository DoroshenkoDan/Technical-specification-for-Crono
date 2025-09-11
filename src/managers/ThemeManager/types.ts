// При необходимости расширять количество тем мы должны переназначить этот тип
export declare type TThemeKey = 'light';

export interface TThemeManager {
  setTheme(v: TThemeKey): void;
  current: TThemeKey;
  themes: TThemeKey[] | string[];
}
