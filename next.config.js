/** @type {import('next').NextConfig} */

const localesPlugin = require("@react-aria/optimize-locales-plugin");

const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(localesPlugin.webpack({ locales: [] }));
    }
    return config;
  },
};

module.exports = nextConfig;
