const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,

        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      syntax: 'scss',
    }),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Title',
      template: './src/index.html'
    }),
  ],
  entry: ["babel-polyfill", './src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    }
  },
  mode: 'development'
};
