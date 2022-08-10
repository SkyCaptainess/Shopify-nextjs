const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");

require("dotenv").config();

module.exports = withPlugins([withImages], {
  webpack: (config, options) => {
    config.resolve.modules.push(path.resolve("./"));
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
});
