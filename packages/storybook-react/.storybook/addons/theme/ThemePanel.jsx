import React from 'react';
import styled from '@emotion/styled';
import { useGlobals, useAddonState } from '@storybook/api';
import { AddonPanel, DocumentWrapper, Placeholder, Separator, Source, Spaced, Title } from '@storybook/components';
import { ColorPalette, ColorItem, Description, Typeset } from '@storybook/addon-docs/blocks';
import { useThemeUI } from 'theme-ui';

import { getThemeByName } from '../../../src/helpers/theme';
import { STORAGE_KEY } from './constants';

const PanelWrapper = styled(DocumentWrapper)`
  padding: 1em;
`;

const TabWrapper = styled.div`
  padding: 1em;
`;

const ThemePanel = (props) => {
  // TODO: how to work with globals initial value?
  // const [{ theme: themeName }] = useGlobals();
  const [globals] = useGlobals();
  const themeName = globals.theme || localStorage.getItem(STORAGE_KEY);
  // getThemeByName fallback to the default theme if none matches the provided name (or if the name is undefined)
  const theme = getThemeByName(themeName, true);

  return (
    <AddonPanel {...props}>
      <PanelWrapper>
        {theme ? (
          <Spaced row={3} outer={1}>
            <Title>
              {theme.emoji} {theme.name}
            </Title>
            <h2>Colors</h2>
            <Description markdown="The theme colors" />
            <ColorPalette>
              {Object.keys(theme.theme.colors).map((color) => (
                <ColorItem
                  key={`theme.colors.${color}`}
                  title={color}
                  subtitle={`theme.colors.${color}`}
                  colors={[theme.theme.colors[color]]}
                />
              ))}
            </ColorPalette>
            <Separator />
            <h2>Typography</h2>
            <Description markdown="The font sizes defined in the theme" />
            {Object.keys(theme.theme.fonts).map((font) => (
              <React.Fragment key={`theme.fonts.${font}`}>
                <h4>
                  {font} <small>{theme.theme.fonts[font]}</small>
                </h4>
                <Typeset fontFamily={theme.theme.fonts[font]} fontSizes={theme.theme.fontSizes} />
              </React.Fragment>
            ))}
            <Separator />
            <h2>Source</h2>
            <Description markdown="The full theme object" />
            <Source code={JSON.stringify(theme.theme, null, 2)} language="js" copyable padded showLineNumbers />
          </Spaced>
        ) : (
          <Placeholder>No theme selected</Placeholder>
        )}
      </PanelWrapper>
    </AddonPanel>
  );
};

export default ThemePanel;
