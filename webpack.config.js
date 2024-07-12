const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env) => ({
  mode: env.NODE_ENV || "development",
  //entry: './src/index.js',
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist"), // Output build directory name
    publicPath: "/", // The bundled files will be available in the browser under this path.
  },
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // to import index.html file inside index.js
    }),
    //new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin(),
    new NodePolyfillPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        APP_ENV: JSON.stringify(env.APP_ENV || "DEV"),
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/assets/static/files" }],
    }),
  ],
  devServer: {
    // host: '0.0.0.0', // Uncomment this, If you want your server to be accessible externally(Mobile etc.)
    port: 3001, // Port number to listen for requests
    open: true, // To open the browser after server had been started
    //contentBase: path.join(__dirname, './public'), // where to serve content(static files) from,
    //inline: true, // Inject scripts into the bundle to show live reloading and build messages in the browser console.
    hot: true, // Enables HMR
    historyApiFallback : true,
    // historyApiFallback:{
    //   index:'dist/index.html'
    // },// In case 404 responses, root(index.html) file will be served,
    proxy: {
      "/api/**": {
        target: "https://api.askassociatescbe.com/",
        secure: false,
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  },
  devtool: env.NODE_ENV === "production" ? false : "source-map", // How source codes are mapped/shown in the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        mimetype: "image/svg+xml",
        scheme: "data",
        type: "asset/resource",
        generator: {
          filename: "icons/[hash].svg",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: miniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      // {
      //   test: /\.(sa|sc|c)ss$/, // styles files
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.(jpe?g|png|gif|svg|webp|ico)$/i,
        loader: "file-loader",
        options: { limit: false },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|webp|ico)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
      {
        test: /\.(config)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
});
