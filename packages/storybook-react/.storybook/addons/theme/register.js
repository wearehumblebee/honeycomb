import { addons, types } from '@storybook/addons';

import { ADDON_ID, PANEL_ID, PARAM_KEY, TOOL_ID } from './constants';
import ThemePanel from './ThemePanel';
import ThemeSelectorTool from './ThemeSelectorTool';

/**
 * Custom theme addon
 *
 * The ThemePanel display information about the current selected theme.
 * NOTE: it relies on components from @storybook/components and @storybook/addon-docs/blocks.
 */
addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Theme',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ThemeSelectorTool,
  });
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Current Theme',
    paramKey: PARAM_KEY,
    render: ThemePanel,
  });
});
