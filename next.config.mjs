/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devapix.vercel.app',
        port: ''
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/pages/introduction',
        permanent: true
      }
    ]
  }
}

export default nextConfig
