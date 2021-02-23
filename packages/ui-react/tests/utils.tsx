import * as React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { base as preset } from '@theme-ui/presets';
import { merge, Theme, ThemeProvider } from 'theme-ui';

import { RecursivePartial } from 'src/types';

export * from '@testing-library/react';

interface TestWrapperProps {
  // It will be merged with the default "base" preset, so any property is optional
  theme?: RecursivePartial<Theme>;
}

interface RenderWithThemeOptions extends RenderOptions, TestWrapperProps {}

const TestWrapper = ({ theme, ...props }: TestWrapperProps): JSX.Element => {
  const mergedTheme = merge(preset as Theme, theme || {});

  return <ThemeProvider {...props} theme={mergedTheme} />;
};

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: RenderWithThemeOptions,
): RenderResult =>
  render(ui, {
    // eslint-disable-next-line react/display-name
    wrapper: (props) => <TestWrapper {...props} theme={options?.theme} />,
    ...options,
  });
