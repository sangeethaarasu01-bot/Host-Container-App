
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const authUrl = process.env.NEXT_PUBLIC_AUTH_API_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;

    // ✅ enable necessary webpack experiments
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      layers: true,   // 👈 this fixes the error
    };

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          // booking: `booking@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          auth: `auth@${authUrl}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
      })
    );

    return config;
  },
};

module.exports = nextConfig;

