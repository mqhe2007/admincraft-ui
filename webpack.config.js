const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const dynamicPlugins = []
if (process.env.NODE_ENV === 'development') {
  dynamicPlugins.push(
    new HtmlWebpackPlugin({
      title: '加载中……',
      template: 'dev/index.html'
    })
  )
}
module.exports = {
  entry:
    process.env.NODE_ENV === 'production' ? './src/index.js' : './dev/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'production' ? './' : '',
    library: 'ui',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@root': path.resolve(__dirname)
    },
    mainFiles: ['index'],
    extensions: ['.js', '.vue']
  },
  devServer: {
    contentBase: './dist',
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          'postcss-loader',
          'stylus-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: path.resolve(__dirname, './src/style/variables.styl')
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin(), ...dynamicPlugins]
}
