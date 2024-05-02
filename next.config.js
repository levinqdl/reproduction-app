/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/app',
  rewrites: async () => {
    return [
      {
        source: '/bing/:path*',
        destination: 'https://bing.com/:path*',
        basePath: false
      }
    ]
  }
};

module.exports = nextConfig;
