import deepmerge from 'deepmerge';

import { BabelConfigurationOptions } from './types';

export type NodeBabelConfigurationOptions = BabelConfigurationOptions;

/**
 * Default babel config for node.js server-side applications
 * Contains default plugins to provide basic backward-compatibility to node environments we usually support
 *
 * @param NodeBabelConfigurationOptions
 *
 * @return object
 */
export const getNodeBabelConfiguration = ({ extension, envPresetOptions }: NodeBabelConfigurationOptions = {}): Record<
  string,
  unknown
> =>
  deepmerge(
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
