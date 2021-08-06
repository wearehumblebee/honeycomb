const path = require('path');

// const STORYBOOK_SRC_PATH = path.resolve(__dirname, '../src');

module.exports = {
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
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  /**
   * At the moment Storybook uses Emotion v10.
   * The following webpack config forces to use Emotion v11 (which theme-ui >= v0.6 is using)
   *
   * @see https://github.com/storybookjs/storybook/issues/13145#issuecomment-833906899
   */
  webpackFinal: (config) => {
    const emotionReactEleven = path.dirname(require.resolve('@emotion/react/package.json'));
    const emotionStyledEleven = path.dirname(require.resolve('@emotion/styled/package.json'));

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': emotionReactEleven,
          '@emotion/styled': emotionStyledEleven,
          'emotion-theming': emotionReactEleven,
        },
      },
    };
  },
};
