import webpack, { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { getCoreConfiguration, CoreConfigurationOptions } from './core';

export interface DevelopmentConfiguration extends Configuration {
  devServer: Configuration['devServer'];
}

export interface DevelopmentConfigurationOptions extends CoreConfigurationOptions {
  devServer?: Configuration['devServer'];
  devtool?: Configuration['devtool'];
  crossOriginLoading?: string | boolean;
}

/**
 * Development config based on webpack-dev-server
 * @see https://webpack.js.org/guides/development/
 *
 * Hot Module Reloading is supported, but local cache will prevent it to work with renamed/deleted files
 * This should be fixed in the next major version of webpack (v5) which is currently in beta
 * @see https://github.com/webpack/webpack/issues/5523
 */
export const getDevelopmentConfiguration = ({
  crossOriginLoading = 'anonymous',
  devtool = 'cheap-module-source-map',
  devServer = {
    port: new Date().getFullYear(),
    host: 'localhost',
    stats: {
      colors: true,
    },
  },
  ...options
}: DevelopmentConfigurationOptions): DevelopmentConfiguration =>
  merge(getCoreConfiguration(options), {
    mode: 'development',
    /**
     * Control over build process output
     * @see https://webpack.js.org/configuration/output/
     */
    output: {
      chunkFilename: '[name].chunk.js',
      crossOriginLoading,
      filename: '[name].js',
      path: options.buildFolder,
      publicPath: '/',
    },
    /**
     * Control source maps generation
     * Feel free to change that to your needs!
     * @see https://webpack.js.org/configuration/devtool/
     */
    devtool,
    /**
     * Webpack Dev Server
     * @see https://webpack.js.org/configuration/dev-server/
     */
    devServer,
    plugins: [new webpack.HotModuleReplacementPlugin()],
    /**
     * Webpack optimisation: do not loose yourself in there, this is just the development config
     * @see https://webpack.js.org/configuration/optimization/
     */
    optimization: {
      // https://webpack.js.org/configuration/optimization/#optimizationminimize
      minimize: false,
      // https://webpack.js.org/configuration/optimization/#optimizationnoemitonerrors
      noEmitOnErrors: true,
      // https://webpack.js.org/configuration/optimization/#optimizationnamedmodules
      namedModules: true,
    },
    /**
     * Webpack performance: in development mode, bundles are non-minified
     * @see https://webpack.js.org/configuration/performance/
     *
     * You can still refer to it as a vague indicator
     */
    performance: {
      maxEntrypointSize: 1536000,
      maxAssetSize: 1536000,
      hints: 'warning',
    },
  }) as DevelopmentConfiguration;
