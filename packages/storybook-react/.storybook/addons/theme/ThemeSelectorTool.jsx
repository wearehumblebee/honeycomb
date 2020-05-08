import React, { useEffect } from 'react';
import { useGlobals, useStorybookApi } from '@storybook/api';
import { TabButton, TooltipLinkList, WithTooltip } from '@storybook/components';
import { styled } from '@storybook/theming';

import { themes } from '../../../src/themes';
import { getThemeByName } from '../../../src/helpers/theme';
import { EVENTS, STORAGE_KEY } from './constants';

export const ColorIcon = styled.span`
  margin: 0 10px 0 1px;
  border-radius: 1rem;
  display: block;
  height: 1rem;
  width: 1rem;
  background: ${({ background }) => background || 'black'};
  box-shadow: black 0 0 0 1px;
`;

const ThemeSelectorTool = () => {
  const api = useStorybookApi();
  const [globals, updateGlobals] = useGlobals();
  const themeName = globals.theme || localStorage.getItem(STORAGE_KEY);
  // getThemeByName fallback to the default theme if none matches the provided name (or if the name is undefined)
  const theme = getThemeByName(themeName, true);

  const updateTheme = (theme) => {
    updateGlobals({
      theme: theme.name,
    });
    localStorage.setItem(STORAGE_KEY, theme.name);
    api.emit(EVENTS.UPDATE, theme);
  };

  // Unclear how to set a default value for globals at the moment
  useEffect(() => {
    if (!globals.theme) {
      updateTheme(theme);
    }
  }, [globals.theme, theme.name]);

  return theme ? (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={themes.map((theme) => ({
            id: theme.name,
            title: theme.name,
            onClick: () => {
              updateTheme(theme);
              onHide();
            },
            left: <ColorIcon background={theme.color} />,
            right: theme.emoji,
          }))}
        />
      )}
      closeOnClick
    >
      <TabButton key="theme" title="Change the theme of the preview" style={{ padding: 0 }}>
        <ColorIcon background={theme.color} />
        {theme.name}
      </TabButton>
    </WithTooltip>
  ) : null;
};

export default ThemeSelectorTool;
