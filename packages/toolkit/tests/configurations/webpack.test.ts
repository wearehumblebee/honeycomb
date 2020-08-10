import { getWebpackConfiguration } from 'src';

describe('configurations > webpack', () => {
  it('provides a default development configuration', () => {
    const configuration = getWebpackConfiguration('development', {
      buildFolder: 'tmp',
      htmlTemplate: 'index.html',
    });

    expect(configuration).toHaveProperty('mode', 'development');
    expect(configuration).toHaveProperty('devServer');
  });

  it('provides a default production configuration', () => {
    const configuration = getWebpackConfiguration('production', {
      buildFolder: 'tmp',
      htmlTemplate: 'index.html',
    });

    expect(configuration).toHaveProperty('mode', 'production');
    // Arbitrary, I agree
    expect(configuration).toHaveProperty('performance');
  });

  it('can be extended production configuration', () => {
    const entry = 'whatever.js';

    const configuration = getWebpackConfiguration(
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
