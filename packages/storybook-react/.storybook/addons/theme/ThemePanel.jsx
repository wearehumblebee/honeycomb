import React from 'react';
import styled from '@emotion/styled';
import { useAddonState } from '@storybook/api';
import {
  AddonPanel,
  DocumentWrapper,
  Placeholder,
  Separator,
  Source,
  Spaced,
  Title,
} from '@storybook/components';
import { ColorPalette, ColorItem, Typeset } from '@storybook/addon-docs';

import { getThemeByName } from '../../../src/helpers/theme';
import { ADDON_ID } from './constants';

const PanelWrapper = styled.div`
  padding: 1em;
`;

const ThemePanel = (props) => {
  const [themeName] = useAddonState(ADDON_ID);
  // getThemeByName fallback to the default theme if none matches the provided name (or if the name is undefined)
  const theme = getThemeByName(themeName, true);

  return (
    <AddonPanel {...props}>
      <DocumentWrapper>
        <PanelWrapper>
          {theme ? (
            <Spaced row={3} outer={1}>
              <Title>
                {theme.emoji} {theme.name}
              </Title>
              <h2>Colors</h2>
              <h4>The theme colors</h4>
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
              <h4>The font sizes defined in the theme</h4>
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
              <h4>The full theme object</h4>
              <Source
                code={JSON.stringify(theme.theme, null, 2)}
                language="jsx"
                copyable
                padded
                showLineNumbers
              />
            </Spaced>
          ) : (
            <Placeholder>No theme selected</Placeholder>
          )}
        </PanelWrapper>
      </DocumentWrapper>
    </AddonPanel>
  );
};

export default ThemePanel;
