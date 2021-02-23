import { ThemeDefinition } from '../themes';

export function getThemeByName(
  themeName: string,
  fallbackToDefaultTheme: boolean,
): ThemeDefinition | undefined;
