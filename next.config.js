/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ipfs.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    config.resolve.fallback = { fs: false };
    return config;
  },
};
https: module.exports = nextConfig;
