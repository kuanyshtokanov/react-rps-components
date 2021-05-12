const path = require('path'); // <-get absolute location for saving
const pkg = require('./package.json');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: 'production',
  entry: "./src/index.js", // <- starting point for bundle 
  output: {
    path: path.resolve(__dirname, 'dist'), //<-where to save ur bundle 
    filename: "bundle.js", //<-filename for bundled file
    library: pkg.name,
    libraryTarget: "commonjs2" //<- to which version are we compiling js 
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     "React": "react",
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/i,
        use: ["svg-inline-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    },
  },
  target: 'node',
  externals: [nodeExternals()]
};