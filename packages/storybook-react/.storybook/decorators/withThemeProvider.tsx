/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { DecoratorFunction, StoryContext, StoryGetter } from '@storybook/addons';
import { Paragraph } from '@humblebee/ui-react';

import { STORAGE_KEY } from '../addons/theme/constants';
import { getThemeByName } from '../../src/helpers/theme';

const withThemeProvider: DecoratorFunction<any> = (Story: StoryGetter, context: StoryContext) => {
  // TODO: how to work with globalArgs initial value?
  const themeName = context.globalArgs.theme || localStorage.getItem(STORAGE_KEY);
  // getThemeByName fallback to the default theme if none matches the provided name (or if the name is undefined)
  // const theme = getThemeByName(context.globalArgs.theme, true);
  const theme = getThemeByName(themeName, true);

  return theme ? (
    <ThemeProvider theme={theme.theme} components={[Paragraph]}>
      <Story {...context} />
    </ThemeProvider>
  ) : Story;
};

export default withThemeProvider;
