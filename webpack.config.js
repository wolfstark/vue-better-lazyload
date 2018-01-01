var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, process.argv[2]),
    filename: "vue-better-lazyload.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "tslint-loader"
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  performance: {
    hints: false
  },
  devtool: "#source-map",
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
