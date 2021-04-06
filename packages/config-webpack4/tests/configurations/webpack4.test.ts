import path from 'path';
import { getWebpack4Configuration } from 'src';

describe('configurations', () => {
  it('provides a default development configuration', () => {
    const configuration = getWebpack4Configuration('development', {
      dotenvPluginOptions: {
        path: path.resolve(__dirname, '.env.test'),
      },
    });

    expect(configuration).toHaveProperty('mode', 'development');
    expect(configuration).toHaveProperty('devServer');
  });

  it('provides a default production configuration', () => {
    const configuration = getWebpack4Configuration('production', {
      dotenvPluginOptions: {
        path: path.resolve(__dirname, '.env.test'),
      },
    });

    expect(configuration).toHaveProperty('mode', 'production');
    // Quite arbitrary indeed
    expect(configuration).toHaveProperty('performance');
  });

  it('can be extended production configuration', () => {
    const entry = 'whatever.js';

    const configuration = getWebpack4Configuration(
      'production',
      {
        buildFolder: 'tmp',
        publicFolder: 'public',
        htmlTemplate: 'index.html',
        dotenvPluginOptions: {
          path: path.resolve(__dirname, '.env.test'),
        },
      },
      {
        entry,
      },
    );

    expect(configuration).toHaveProperty('entry', entry);
  });
});
