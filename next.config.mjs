/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ],
    // Alternative: use domains (older syntax but still works)
    domains: ['fakestoreapi.com'],
  },
}

export default nextConfig