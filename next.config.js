/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // domains: ['media.graphassets.com'],
    domains: ['scontent.fpll2-1.fna.fbcdn.net','media.graphassets.com'],
  },
}

module.exports = nextConfig
