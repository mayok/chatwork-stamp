module.exports = {
  entry: "./src/index.ts",
  mode: process.env.NODE_ENV || "development",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  }
};
