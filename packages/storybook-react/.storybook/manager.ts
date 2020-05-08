// Register add-ons.
import { addons } from '@storybook/addons';

// manager cannot seem to import ts files?!
import { theme as storybookTheme } from './theme';

addons.setConfig({
  panelPosition: 'bottom',
  theme: storybookTheme,
  isFullscreen: false,
  showPanel: true,
  storySort: {
    method: 'alphabetical',
  },
});
