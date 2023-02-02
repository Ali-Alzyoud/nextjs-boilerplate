/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com']
  },
  i18n: {
    locales: ['en-US', 'ar-AR'],
    defaultLocale: 'ar-AR',
  }
}
module.exports = nextConfig
