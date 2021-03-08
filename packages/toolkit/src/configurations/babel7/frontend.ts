import merge from 'babel-merge';

import { BabelConfigurationOptions } from './types';

export interface FrontendConfigurationOptions extends BabelConfigurationOptions {
  moduleResolverAlias?: Record<string, string>;
}

/**
 * Default babel (v7) config for frontend applications
 * Contains default plugins to provide basic backward-compatibility to browsers we usually support
 *
 * @param FrontendBabelConfigurationOptions
 *
 * @return object
 */
export const getFrontendConfiguration = ({
  extension,
  envPresetOptions,
  moduleResolverAlias,
}: FrontendConfigurationOptions = {}): Record<string, unknown> =>
  merge(
    {
      presets: [
        [
          // https://babeljs.io/docs/en/babel-preset-env
          '@babel/preset-env',
          envPresetOptions || {
            // https://babeljs.io/docs/en/babel-preset-env#corejs
            corejs: 3,
            // https://babeljs.io/docs/en/babel-preset-env#modules
            modules: false,
            // https://babeljs.io/docs/en/babel-preset-env#loose
            loose: true,
            // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
            useBuiltIns: 'usage',
          },
        ],
        // https://babeljs.io/docs/en/babel-preset-typescript
        '@babel/preset-typescript',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@loadable/babel-plugin',
        [
          // https://github.com/tleunen/babel-plugin-module-resolver
          'module-resolver',
          {
            root: ['./src'],
            alias: moduleResolverAlias,
          },
        ],
      ],
      env: {
        // special env for webpack to load ES6 config
        // used together with cross-env: "cross-env BABEL_NODE=webpack ..."
        webpack: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'auto',
              },
            ],
            '@babel/preset-typescript',
          ],
        },
        // special env for tests environments such as babel-jest
        test: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current',
                },
                loose: true,
              },
            ],
          ],
          // Allow to use dynamic import('./my-module.js') statements (such as used by loadable-components)
          // https://github.com/airbnb/babel-plugin-dynamic-import-node
          plugins: ['dynamic-import-node'],
        },
      },
    },
    extension || {},
  );
