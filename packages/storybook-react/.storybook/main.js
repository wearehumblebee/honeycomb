const path = require('path');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

const STORYBOOK_TSCONFIG_PATH = path.resolve(__dirname, 'tsconfig.json');
// const STORYBOOK_SRC_PATH = path.resolve(__dirname, '../src');

module.exports = {
  stories: ['../src/stories/**/*.stories.@(mdx|ts|tsx|js|jsx)'],
  addons: [
    // Note: addons-actions & addons-knobs will most likely be deprecated in the near future in favour of Storybook Args (WIP)
    // RFC: https://docs.google.com/document/d/1Mhp1UFRCKCsN8pjlfPdz8ZdisgjNXeMXpXvGoALjxYM/edit#
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
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
  webpackFinal: async (config) => {
    config.devtool =
      process.env.NODE_ENV === 'production'
        ? 'cheap-module-source-map'
        : 'eval-cheap-module-source-map';

    config.resolve.plugins.push(
      new TsConfigPathsPlugin({
        configFile: STORYBOOK_TSCONFIG_PATH,
      }),
    );

    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: STORYBOOK_TSCONFIG_PATH,
            // Delegate Type Checking to a separate process
            // @see https://github.com/TypeStrong/ts-loader#faster-builds
            // Disabling for now: too many type issues probably due to the migration of theme-ui and Storybook to TypeScript
            // transpileOnly: true,
          },
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    // config.plugins.push(new ForkTsCheckerWebpackPlugin({
    //   // checkSyntacticErrors: true
    // }));
    config.resolve.plugins.push(
      new TsConfigPathsPlugin({
        configFile: STORYBOOK_TSCONFIG_PATH,
      }),
    );
    config.plugins.push(new SourceMapDevToolPlugin());

    return config;
  },
};
