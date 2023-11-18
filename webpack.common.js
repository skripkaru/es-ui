const fs = require('fs')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pages = fs.readdirSync(path.resolve(__dirname, 'src')).filter((el) => el.match(/.*\.(html?)/gi))

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./scripts/main.js', './styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js'
  },
  plugins: [
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, `src/${page}`),
          filename: `${page}`,
          inject: 'body',
          minify: false
        })
    ),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new SVGSpritemapPlugin('src/assets/icons/*.svg', {
      output: {
        filename: 'sprite.svg'
      },
      sprite: {
        prefix: false,
        generate: {
          title: false
        }
      }
    }),
    new CopyWebpackPlugin({
      patterns: [path.resolve(__dirname, 'src/favicon.ico'), path.resolve(__dirname, 'src/assets/**/*')]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[file]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[file]'
        }
      }
    ]
  }
}
