import merge from 'babel-merge';

import { BabelConfigurationOptions } from './types';

export type NodeConfigurationOptions = BabelConfigurationOptions;

/**
 * Default babel (v7) config for node.js server-side applications
 * Contains default plugins to provide basic backward-compatibility to node environments we usually support
 *
 * @param NodeBabelConfigurationOptions
 *
 * @return object
 */
export const getNodeConfiguration = ({
  extension,
  envPresetOptions,
}: NodeConfigurationOptions = {}): Record<string, unknown> =>
  merge(
    {
      presets: [
        [
          // https://babeljs.io/docs/en/babel-preset-env
          '@babel/preset-env',
          envPresetOptions || {
            // https://babeljs.io/docs/en/babel-preset-env#targets
            targets: {
              node: 'current',
            },
          },
        ],
        // https://babeljs.io/docs/en/babel-preset-typescript
        '@babel/preset-typescript',
      ],
      env: {
        // specific env for webpack to load ES6 configurations
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
      },
    },
    extension || {},
  );
