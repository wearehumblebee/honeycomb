import { getFrontendBabelConfiguration, getNodeBabelConfiguration } from 'src';

describe('configurations > babel', () => {
  describe('frontend', () => {
    it('provides a default configuration', () => {
      const configuration = getFrontendBabelConfiguration();

      expect(configuration).toHaveProperty('env');
      expect(configuration).toHaveProperty('plugins');
      expect(configuration).toHaveProperty('presets');
    });

    it('can be extended', () => {
      const extension = {
        presets: ['@babel/preset-react'],
        plugins: [
          'lodash',
          [
            'emotion',
            {
              autoLabel: true,
              cssPropOptimization: true,
              labelFormat: '[filename]--[local]',
            },
          ],
        ],
        env: {
          production: {
            plugins: [
              [
                'emotion',
                {
                  autoLabel: false,
                  cssPropOptimization: true,
                },
              ],
              'transform-react-remove-prop-types',
            ],
          },
        },
      };
      const envPresetOptions = {
        corejs: 999,
        useBuiltIns: 'entry',
      };

      const configuration = getFrontendBabelConfiguration({
        extension,
        envPresetOptions,
      });

      expect(configuration).toHaveProperty('env', expect.objectContaining(extension.env));
      expect(configuration).toHaveProperty('plugins', expect.arrayContaining(extension.plugins));
      expect(configuration).toHaveProperty(
        'presets',
        expect.arrayContaining([['@babel/preset-env', envPresetOptions]]),
      );
      expect(configuration).toHaveProperty('presets', expect.arrayContaining(extension.presets));
    });
  });

  describe('node', () => {
    it('provides a default configuration', () => {
      const configuration = getNodeBabelConfiguration();

      expect(configuration).toHaveProperty('env');
      expect(configuration).toHaveProperty('presets');
    });

    it('can be extended', () => {
      const extension = {
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              regenerator: true,
              corejs: 3,
            },
          ],
        ],
      };
      const envPresetOptions = {
        targets: {
          node: '12',
        },
      };

      const configuration = getNodeBabelConfiguration({
        envPresetOptions,
        extension,
      });

      expect(configuration).toHaveProperty(
        'presets',
        expect.arrayContaining([['@babel/preset-env', envPresetOptions]]),
      );
      expect(configuration).toHaveProperty('plugins', expect.arrayContaining(extension.plugins));
    });
  });
});
