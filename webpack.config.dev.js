import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web', // node to bundle for node
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    stats: {
      hash: false,
      version: false,
      timings: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'),loader: 'babel' },
      { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css!postcss-loader!less') },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      // { test: /\.(html|json)$/, exclude: /node_modules/, loader: 'raw'},
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.svg$/, exclude: /node_modules/, loader: 'file?name=[path][name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json', '.html', '.less', '.svg']
  }
};
