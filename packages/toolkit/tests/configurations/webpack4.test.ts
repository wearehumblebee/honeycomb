import { getWebpack4Configuration } from 'src';

describe('configurations > webpack4', () => {
  it('provides a default development configuration', () => {
    const configuration = getWebpack4Configuration('development', {
      buildFolder: 'tmp',
      htmlTemplate: 'index.html',
    });

    expect(configuration).toHaveProperty('mode', 'development');
    expect(configuration).toHaveProperty('devServer');
  });

  it('provides a default production configuration', () => {
    const configuration = getWebpack4Configuration('production', {
      buildFolder: 'tmp',
      htmlTemplate: 'index.html',
    });

    expect(configuration).toHaveProperty('mode', 'production');
    // Arbitrary, I agree
    expect(configuration).toHaveProperty('performance');
  });

  it('can be extended production configuration', () => {
    const entry = 'whatever.js';

    const configuration = getWebpack4Configuration(
      'production',
      {
        buildFolder: 'tmp',
        htmlTemplate: 'index.html',
      },
      {
        entry,
      },
    );

    expect(configuration).toHaveProperty('entry', entry);
  });
});
