/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/Desarrollo-web',
        destination: '/desarrollo-web',
        permanent: true,
      },
      {
        source: '/Portfolio',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
