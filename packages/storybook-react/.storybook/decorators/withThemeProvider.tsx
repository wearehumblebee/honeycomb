/** @jsx jsx */
import { jsx } from 'theme-ui';
// There seem to be 2 ThemeProvider at the moment
// https://github.com/system-ui/theme-ui/issues/834#issuecomment-660049253
import { ThemeProvider } from '@theme-ui/theme-provider';
import { DecoratorFunction, StoryContext, StoryGetter } from '@storybook/addons';
import { Paragraph } from '@humblebee/ui-react';

import { STORAGE_KEY } from '../addons/theme/constants';
import { getThemeByName } from '../../src/helpers/theme';

const components = {
  Paragraph,
};

const withThemeProvider: DecoratorFunction<StoryGetter | JSX.Element> = (
  Story: StoryGetter,
  context: StoryContext,
) => {
  // TODO: how to work with globals initial value?
  const themeName = context.globals.theme || localStorage.getItem(STORAGE_KEY);
  // getThemeByName fallback to the default theme if none matches the provided name (or if the name is undefined)
  // const theme = getThemeByName(context.globals.theme, true);
  const theme = getThemeByName(themeName, true);

  return theme ? (
    <ThemeProvider theme={theme.theme} components={components}>
      <Story {...context} />
    </ThemeProvider>
  ) : (
    Story
  );
};

export default withThemeProvider;
