import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { StoryId, StoryIdentifier } from '@storybook/addons';

import withThemeProvider from './decorators/withThemeProvider';
import { theme as storybookTheme } from './theme';

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a: [StoryId, StoryIdentifier], b: [StoryId, StoryIdentifier]): number =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  // https://github.com/storybookjs/storybook/tree/master/addons/docs
  docs: {
    theme: storybookTheme
  },
  // https://github.com/storybookjs/storybook/tree/master/addons/viewport
  viewport: {
    viewports: MINIMAL_VIEWPORTS
  }
};

export const decorators = [
  withThemeProvider
];
