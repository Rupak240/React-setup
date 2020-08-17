# React Setup Step by Step : 

```
npm init -y

npm i react react-dom

npm i @babel/core @babel/preset-env @babel/preset-react babel/loader
```

### In *src/.babelrc*, 
```
{
  "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```

```
npm i webpack webpack-cli webpack-dev-server

npm i html-webpack-plugin

npm i style-loader css-loader sass-loader

npm i --dev file-loader
```

### In *src/webpack.config.js*, 
```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|jpeg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
```

## ***OR***
### Do it in a easy way...
```
npm i create-react-app -g

create-react-app react-complete-guide<name of the project>
```

### ***OR***
```
npx create-react-app <name of the project>
```

***Rupak Dey***