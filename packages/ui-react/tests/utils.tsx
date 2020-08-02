import * as React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { merge, Theme, ThemeProvider } from 'theme-ui';
import { base as preset } from '@theme-ui/presets';

import { RecursivePartial } from 'src/types';

export * from '@testing-library/react';

interface TestWrapperProps {
  // It will be merged with the default "base" preset, so any property is optional
  theme?: RecursivePartial<Theme>;
}

interface RenderWithThemeOptions extends RenderOptions, TestWrapperProps {}

const TestWrapper = ({ theme, ...props }: TestWrapperProps): JSX.Element => {
  // TODO: remove those ugly types assertions once 'merge' is fixed upstream
  // (It currently accepts only 2 'complete' themes)
  const mergedTheme = merge(preset as Theme, (theme as Theme) || {});

  return <ThemeProvider {...props} theme={mergedTheme} />;
};

export const renderWithTheme = (ui: React.ReactElement, options?: RenderWithThemeOptions): RenderResult =>
  render(ui, {
    // eslint-disable-next-line react/display-name
    wrapper: (props) => <TestWrapper {...props} theme={options?.theme} />,
    ...options,
  });
