/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/app',
  rewrites: async () => {
    return [
      {
        source: '/external',
        destination: 'https://example.vercel.sh',
        basePath: false
      }
    ]
  }
};

module.exports = nextConfig;
