module.exports = {
  mode: 'production',
  entry: './src/index',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // options: {
        //   presets: ["@babel/preset-env"],
        //   plugins: ["@babel/plugin-proposal-object-rest-spread"],
        // },
      },
    ],
  },
  target: 'node',
}
