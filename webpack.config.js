var path = require("path");
var webpack = require("webpack");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, process.argv[2]),
    filename: "vue-better-lazyload.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "vue-better-lazyload"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
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
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  devtool: "#source-map",
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          // 删除所有的 `console` 语句
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true
        },
        output: {
          beautify: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
