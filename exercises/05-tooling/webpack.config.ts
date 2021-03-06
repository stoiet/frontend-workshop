import * as webpack from 'webpack';
import { resolve } from 'path';

export const _ = relativePath => {
  return resolve(__dirname, relativePath);
};

const tsLoaderOptions = JSON.stringify({
  configFileName: _('./tsconfig.json')
});

export default [{
  context: _('./'),
  entry: {
    application: _('./src/bootstrap.ts')
  },
  output: {
    filename: '[name].bundle.js',
    path: _('../../dist'),
    sourceMapFilename: '[name].bundle.map'
  },
  devtool: 'source-map',
  resolve: { extensions: ['.ts', '.js', '.pug'] },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [`ts-loader?${tsLoaderOptions}`, 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-static-loader',
        exclude: /node_modules/,
        options: {
          pretty: false,
          compileDebug: true,
          debug: false,
          cache: false
        }
      }
    ]
  },
  target: 'web',
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      _('../../src'), {}
    )
  ],
  devServer: {
    contentBase: _('./'),
    port: process.env.CLIENT_PORT || 9200,
    host: process.env.CLIENT_HOST || '127.0.0.1',
    watchOptions: {
      ignore: /node_modules/,
      aggregateTimeout: 500,
      poll: true
    }
  }
}];
