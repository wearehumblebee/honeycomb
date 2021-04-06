import path from 'path';
import { getBabel7FrontendConfiguration, getBabel7NodeConfiguration } from 'src';

describe('configurations', () => {
  describe('frontend', () => {
    it('provides a default configuration', () => {
      const configuration = getBabel7FrontendConfiguration();

      expect(configuration).toHaveProperty('env');
      expect(configuration).toHaveProperty('plugins');
      expect(configuration).toHaveProperty('presets');
    });

    it('can be extended', () => {
      const emotionPluginOptions = {
        default: {
          autoLabel: true,
          cssPropOptimization: true,
          labelFormat: '[filename]--[local]',
        },
        production: {
          autoLabel: false,
          cssPropOptimization: true,
        },
      };
      const extension = {
        presets: ['@babel/preset-react'],
        plugins: ['lodash', ['emotion', emotionPluginOptions.default]],
        env: {
          production: {
            plugins: [['emotion', emotionPluginOptions.production]],
          },
        },
      };
      const envPresetOptions = {
        corejs: 999,
        useBuiltIns: 'entry',
      };

      const configuration = getBabel7FrontendConfiguration({
        extension,
        envPresetOptions,
      });

      expect(configuration).toHaveProperty(
        'env',
        expect.objectContaining({
          production: expect.objectContaining({
            plugins: expect.arrayContaining([
              [expect.stringContaining('emotion'), emotionPluginOptions.production],
            ]),
          }),
        }),
      );
      expect(configuration).toHaveProperty(
        'plugins',
        expect.arrayContaining([
          expect.stringContaining('lodash'),
          [expect.stringContaining('emotion'), emotionPluginOptions.default],
        ]),
      );
      expect(configuration).toHaveProperty(
        'presets',
        expect.arrayContaining([
          expect.stringContaining(path.join('@babel', 'preset-react')),
          [expect.stringContaining(path.join('@babel', 'preset-env')), envPresetOptions],
        ]),
      );
    });
  });

  describe('node', () => {
    it('provides a default configuration', () => {
      const configuration = getBabel7NodeConfiguration();

      expect(configuration).toHaveProperty('env');
      expect(configuration).toHaveProperty('presets');
    });

    it('can be extended', () => {
      const babelRuntimeOptions = {
        regenerator: true,
        corejs: 3,
      };
      const extension = {
        plugins: [['@babel/plugin-transform-runtime', babelRuntimeOptions]],
      };
      const envPresetOptions = {
        targets: {
          node: '12',
        },
      };

      const configuration = getBabel7NodeConfiguration({
        envPresetOptions,
        extension,
      });

      expect(configuration).toHaveProperty(
        'presets',
        expect.arrayContaining([
          [expect.stringContaining(path.join('@babel', 'preset-env')), envPresetOptions],
        ]),
      );
      expect(configuration).toHaveProperty(
        'plugins',
        expect.arrayContaining([
          [
            expect.stringContaining(path.join('@babel', 'plugin-transform-runtime')),
            babelRuntimeOptions,
          ],
        ]),
      );
    });
  });
});
