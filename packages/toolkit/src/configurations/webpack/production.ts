import webpack, { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import CompressionPlugin from 'compression-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import SubResourceIntegrityPlugin from 'webpack-subresource-integrity';

import { getCoreConfiguration, CoreConfigurationOptions } from './core';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductionConfiguration extends Configuration {}

export interface ProductionConfigurationOptions extends CoreConfigurationOptions {
  imageminOptions?: ImageminPlugin.Options;
  subResourceIntegrityOptions?: SubResourceIntegrityPlugin.Options;
  hashedModuleIdsOptions?: never;
}

/**
 * Production config: optimised for general performances
 * You might still need to adjust it before launching your application in production
 * @see https://webpack.js.org/guides/production/
 */
export const getProductionConfiguration = (options: ProductionConfigurationOptions): ProductionConfiguration =>
  merge(getCoreConfiguration(options), {
    mode: 'production',
    /**
     * Control over build process output
     * @see https://webpack.js.org/configuration/output/
     */
    output: {
      chunkFilename: '[chunkhash:8].chunk.js',
      crossOriginLoading: 'anonymous',
      filename: '[hash:8].js',
      path: options.buildFolder,
      publicPath: '/',
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(options.hashedModuleIdsOptions),
      /**
       * Local images optimisation
       * @see https://github.com/Klathmon/imagemin-webpack-plugin
       *
       * NOTE: as much as possible, avoid bundling assets together with the app:
       * Serve them efficiently from a CDN if available
       */
      new ImageminPlugin(options.imageminOptions || {}),
      /**
       * Build-time compression: will help with servers and/or CDN not providing runtime compression (if any?)
       * @see https://webpack.js.org/plugins/compression-webpack-plugin/
       *
       * NOTE: the brotli algorithm has been added to the node.js available >= 11.7.0.
       * The "getBrotliAdapter" function above is only for backward compatibility reasons
       */
      new CompressionPlugin({
        algorithm: 'gzip',
        compressionOptions: {
          level: 9,
        },
        deleteOriginalAssets: false,
        filename: '[path].gz[query]',
        minRatio: 0.8,
        test: /\.(js|css|html|txt|xml|json|md|ico|jpe?g|png|gif|webp|svg|woff2?|webapp|webmanifest)$/,
        threshold: 1024,
      }),
      new CompressionPlugin({
        // https://webpack.js.org/plugins/compression-webpack-plugin/#using-brotli
        algorithm: 'brotliCompress',
        compressionOptions: {
          level: 11,
        },
        deleteOriginalAssets: false,
        filename: '[path].br[query]',
        minRatio: 0.8,
        test: /\.(js|css|html|txt|xml|json|md|ico|jpe?g|png|gif|webp|svg|woff2?|webapp|webmanifest)$/,
        threshold: 1024,
      }),
      /**
       * Add SRI attributes to compiled scripts
       * @see https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
       *
       * NOTE: since CSS-in-JS libraries injects styles using inline <style> tags, the benefits of this pattern are a bit limited
       */
      new SubResourceIntegrityPlugin(
        options.subResourceIntegrityOptions || {
          hashFuncNames: ['sha256', 'sha384'],
        },
      ),
    ],
    /**
     * Webpack optimisation control
     * @see https://webpack.js.org/configuration/optimization/
     */
    optimization: {
      // https://webpack.js.org/configuration/optimization/#optimizationconcatenatemodules
      concatenateModules: true,
      // https://webpack.js.org/configuration/optimization/#optimizationsideeffects
      sideEffects: true,
      // https://webpack.js.org/configuration/optimization/#optimizationminimize
      minimize: true,
      // https://webpack.js.org/configuration/optimization/#optimizationminimizer
      minimizer: [
        new TerserPlugin({
          cache: true,
          // https://github.com/webpack-contrib/terser-webpack-plugin#extractcomments
          extractComments: 'some',
          parallel: true,
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            compress: {
              // Dead code elimination
              dead_code: true,
              // Remove console in production
              drop_console: true,
            },
            output: {
              // https://github.com/webpack-contrib/terser-webpack-plugin#preserve-comments
              comments: /@license/i,
            },
          },
        }),
      ],
    },
    /**
     * Specific performance thresholds
     * @see https://webpack.js.org/guides/build-performance/
     *
     * You can adjust that to your needs, just be a responsible developer
     */
    performance: {
      maxEntrypointSize: 128000,
      maxAssetSize: 128000,
      hints: 'warning',
    },
  });
