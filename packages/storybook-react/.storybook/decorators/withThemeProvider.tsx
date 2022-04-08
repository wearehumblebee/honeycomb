/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { DecoratorFunction } from '@storybook/addons';

import { getThemeByName } from '../../src/helpers/theme';

const withThemeProvider: DecoratorFunction<JSX.Element> = (Story, context) => {
  // TODO: how to work with globals initial value?
  const themeName = context.globals.theme;
  // getThemeByName fallback to the default theme if none matches the provided name (or if the name is undefined)
  // const theme = getThemeByName(context.globals.theme, true);
  const theme = getThemeByName(themeName, true);

  return (
    <ThemeProvider theme={theme.theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export default withThemeProvider;
