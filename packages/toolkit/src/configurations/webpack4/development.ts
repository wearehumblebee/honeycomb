import webpack, { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import { getCoreConfiguration, CoreConfigurationOptions } from './core';

export interface DevelopmentConfiguration extends Configuration {
  devServer: DevServerConfiguration;
}

export interface DevelopmentConfigurationOptions extends CoreConfigurationOptions {
  devServer?: Partial<DevServerConfiguration>;
  crossOrigin?: string | boolean;
}

/**
 * Development config based on webpack-dev-server
 * @see https://webpack.js.org/guides/development/
 *
 * Hot Module Reloading is supported, but local cache will prevent it to work with renamed/deleted files
 * This should be fixed in the next major version of webpack (v5) which is currently in beta
 * @see https://github.com/webpack/webpack/issues/5523
 */
export const getDevelopmentConfiguration = (
  options: DevelopmentConfigurationOptions,
): DevelopmentConfiguration =>
  merge(getCoreConfiguration(options), {
    mode: 'development',
    /**
     * Control over build process output
     * @see https://webpack.js.org/configuration/output/
     */
    output: {
      chunkFilename: '[name].chunk.js',
      crossOriginLoading: 'anonymous',
      filename: '[name].js',
      path: options.buildFolder,
      publicPath: '/',
    },
    /**
     * Control source maps generation
     * Feel free to change that to your needs!
     * @see https://webpack.js.org/configuration/devtool/
     */
    devtool: 'cheap-module-source-map',
    /**
     * Webpack Dev Server
     * @see https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
      port: new Date().getFullYear(),
      host: 'localhost',
      stats: {
        colors: true,
      },
    },
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
