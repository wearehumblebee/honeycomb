import { addParameters, addDecorator } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import withThemeProvider from './decorators/withThemeProvider';
import { theme as storybookTheme } from './theme';

addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) =>
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
});

addDecorator(withThemeProvider);
