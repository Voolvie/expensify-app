const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  return {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js",
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true, // No need to duplicate settings, reads from .babelrc
          },
        },
      },
      {
        test: /\.s?css$/,
            use: [ MiniCssExtractPlugin.loader, 
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
    ],
      },
    ],
  },
  plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'styles.css'
        })
    ],
  devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
  devServer: {
    hot: false,
    liveReload: true,
    static: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
  mode: "development",
  }
}
