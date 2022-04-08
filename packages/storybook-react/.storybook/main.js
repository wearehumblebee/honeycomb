const path = require('path');

module.exports = {
  framework: '@storybook/react',
  core: {
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5
    builder: 'webpack5',
  },
  features: {
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#babel-mode-v7
    babelModeV7: true,
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#emotion11-quasi-compatibility
    emotionAlias: false,
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-the-v7-store
    storyStoreV7: false,
  },
  addons: [
    // Note: addons-actions & addons-knobs will most likely be deprecated in the near future in favour of Storybook Args (WIP)
    // RFC: https://docs.google.com/document/d/1Mhp1UFRCKCsN8pjlfPdz8ZdisgjNXeMXpXvGoALjxYM/edit#
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    // {
    //   // https://github.com/storybookjs/presets/issues/65
    //   name: '@storybook/preset-typescript',
    //   options: {
    //     forkTsCheckerWebpackPluginOptions: {
    //       tsconfig: STORYBOOK_TSCONFIG_PATH
    //     },
    //     // include: [
    //     //   STORYBOOK_SRC_PATH
    //     // ],
    //     framework: 'react',
    //     transpileManager: true
    //   }
    // },
    require.resolve(path.resolve(__dirname, 'addons/theme/register.js')),
  ],
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
};
