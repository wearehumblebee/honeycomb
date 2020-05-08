import { themes } from '../themes';

export const getThemeByName = (themeName, fallbackToDefaultTheme = true) => {
  let theme = themes.find(({ name }) => name === themeName);

  if (!theme && fallbackToDefaultTheme) {
    theme = themes.find((theme) => !!theme.default);
  }

  return theme;
};
