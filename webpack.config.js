const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CompressionWebpackPlugin({
      filename: "bundle.js.gz", // Output file name
      algorithm: "gzip", // Compression algorithm
      test: /\.(js|css|html|svg)$/, // File types to compress
      threshold: 10240, // Only assets bigger than this size are processed
      minRatio: 0.8, // Only assets that compress better than this ratio are processed
    }),
  ],
};
