/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com']
  },
  i18n: {
    locales: [ 'ar-AR', 'en-US'],
    defaultLocale: 'ar-AR',
    localeDetection: false,
  },
  trailingSlash: true
}

module.exports = nextConfig
