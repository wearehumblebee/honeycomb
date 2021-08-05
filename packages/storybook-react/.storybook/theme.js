import { create } from '@storybook/theming';
import packageInformations from '@humblebee/ui-react/package.json';

// https://storybook.js.org/docs/configurations/theming/
export const theme = create({
  base: 'light', // 'dark' | 'light'
  // Brand
  brandTitle: `${
    packageInformations.name
  }<br />${`<span style="font-size: 10px;font-weight: normal">v${packageInformations.version}</span>`}`,
  brandUrl: './',
  brandImage: undefined,
  // Colors
  colorPrimary: '#000000',
  colorSecondary: '#161616',
  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  fontCode: '"Fira Code", monospace',
  // // UI
  // appBg: '#161616',
  appContentBg: '#ffffff',
  // appBorderColor: '#ffffff',
  // appBorderRadius: 0,
  // // Text colors
  textColor: '#161616',
  // textInverseColor: '#161616',
  // // Toolbar default and active colors
  // barTextColor: '#ffffff',
  // barSelectedColor: '#fff700',
  // barBg: '#161616',
  // // Form colors
  // inputBg: 'transparent',
  // inputBorder: '#ffffff',
  // inputTextColor: '#ffffff',
  // inputBorderRadius: 6,
});
