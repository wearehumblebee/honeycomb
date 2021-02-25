import { Configuration } from 'webpack';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin, Options as CleanWebpackPluginOptions } from 'clean-webpack-plugin';
import DotenvPlugin from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LodashWebpackPlugin from 'lodash-webpack-plugin';

const BUILD_FOLDER = 'build';
const PUBLIC_FOLDER = 'public';

export interface CoreConfigurationOptions {
  buildFolder: string;
  htmlTemplate: string;
  dotenvPluginOptions?: DotenvPlugin.Options;
  cleanWebpackPluginOptions?: CleanWebpackPluginOptions;
}

/**
 * Base config: rules that apply to both development and production
 * It is not meant to be used directly, but extended for the use-case
 */
export const getCoreConfiguration = ({
  cleanWebpackPluginOptions = {
    cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore'],
  },
  dotenvPluginOptions = {
    safe: false, // we might not need all parameters to be defined in all environments
    systemvars: true, // only load vars from '.env' file if they are NOT already defined as env variables
  },
  ...options
}: CoreConfigurationOptions): Configuration => ({
  // This is intentional: this configuration is not intended to be used without extension.
  mode: 'none',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.mjs',
      '.json',
      '.wasm',
      '.svg',
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.webp',
      '.svg',
      '.woff',
      '.woff2',
    ],
  },
  module: {
    rules: [
      /**
       * Load js|jsx files using babel-loader
       * @see https://webpack.js.org/loaders/babel-loader/
       */
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      /**
       * Load static files using file-loader
       * NOTE: as much as possible avoid loading them locally and use a CDN instead
       * (inject such in public/index.html template)
       * @see https://webpack.js.org/loaders/file-loader/
       */
      {
        test: /\.(jpe?g|png|gif|webp|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: true,
              name: '[name].[ext]',
              outputPath: 'assets/static',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    /**
     * Inject env parameters (from system and/or local .env file) to application
     * @see https://github.com/mrsteele/dotenv-webpack
     */
    new DotenvPlugin(dotenvPluginOptions),
    /**
     * Clean-up previous build files
     */
    new CleanWebpackPlugin(cleanWebpackPluginOptions),
    /**
     * Copy static assets from public subfolder
     */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: PUBLIC_FOLDER, // Copy all public assets (favicons, splash etc.)
          to: BUILD_FOLDER,
          globOptions: {
            ignore: [
              'index.html', // Do not copy, it would be injected by HtmlWebpackPlugin
            ],
          },
        },
      ],
    }),
    /**
     * Lodash optimisation
     * @see https://youmightnotneed.com/lodash/
     */
    new LodashWebpackPlugin(),
    /**
     * Build CSR template from file and inject scripts
     * @see https://webpack.js.org/plugins/html-webpack-plugin/
     */
    new HtmlWebpackPlugin({
      template: options.htmlTemplate,
      path: options.buildFolder,
      filename: 'index.html',
      hash: false, // Do not enable: hash conflicts with ServiceWorker cache!
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
  /**
   * Enable code-splitting
   * @see https://webpack.js.org/guides/code-splitting/
   */
  optimization: {
    splitChunks: {
      // You will probably need to adjust this strategy to your needs
      chunks: 'all',
    },
  },
});
