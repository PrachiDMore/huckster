/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd135u4jtzauizi.cloudfront.net',
      },
    ],
  },
}

module.exports = nextConfig
