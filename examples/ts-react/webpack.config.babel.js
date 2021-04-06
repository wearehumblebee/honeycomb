import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const BUILD_FOLDER = path.resolve(__dirname, 'dist');
const SRC_FOLDER = path.resolve(__dirname, 'src');

function getConfiguration(_env, args) {
  const mode = args?.mode || 'production';

  console.info(`running webpack in ${mode} mode`);

  return {
    target: 'web',
    mode,
    devtool: mode === 'development' ? 'cheap-module-source-map' : undefined,
    devServer:
      mode === 'development'
        ? {
            historyApiFallback: true,
            host: 'localhost',
            port: 1234,
            static: [
              {
                directory: BUILD_FOLDER,
                publicPath: '/',
                serveIndex: true,
                watch: true,
              },
            ],
          }
        : undefined,
    entry: path.resolve(SRC_FOLDER, 'index.tsx'),
    output: {
      clean: true,
      path: BUILD_FOLDER,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      minimize: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(SRC_FOLDER, 'index.html'),
        path: BUILD_FOLDER,
        filename: 'index.html',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    stats: 'normal',
  };
}

export default getConfiguration;
