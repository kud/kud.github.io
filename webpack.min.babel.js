import path from "path"
import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import CnameWebpackPlugin from "cname-webpack-plugin"

import babelConfig from "./babel.config.js"

const SRC_DIR = path.resolve(__dirname, "src")
const DIST_DIR = path.resolve(__dirname, "dist")

export default env => {
  return {
    // the source
    entry: [`${SRC_DIR}/index.js`],

    // the destination
    output: {
      path: DIST_DIR,
      filename: "index.[hash].js",
      publicPath: "/",
    },

    resolve: {
      alias: {
        "~": `${SRC_DIR}`,
      },
    },

    // plugins
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
        favicon: "src/favicon.png",
      }),

      new ExtractTextPlugin({
        filename: "index.[hash].css",
      }),

      new CnameWebpackPlugin({
        domain: "kud.io",
      }),

      new webpack.optimize.UglifyJsPlugin({
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        comments: false,
      }),

      new webpack.optimize.ModuleConcatenationPlugin(),
    ],

    // what will be used for each type of code
    module: {
      rules: [
        // javascript
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: babelConfig,
        },

        // files
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
            },
          },
        },

        // styles
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: {
                    discardComments: {
                      removeAll: true,
                    },
                  },
                  alias: {
                    "~": `${SRC_DIR}`,
                  },
                },
              },
            ],
          }),
        },

        // images
        {
          test: /.*\.(gif|png|jpe?g|svg|ico)$/i,
          use: [
            {
              loader: "file-loader",
            },
            {
              loader: "image-webpack-loader",
              options: {
                progressive: true,
                pngquant: {
                  quality: "65-90",
                  speed: 4,
                },
                mozjpeg: {
                  quality: 85,
                  progressive: true,
                },
              },
            },
          ],
        },
      ],
    },
  }
}
