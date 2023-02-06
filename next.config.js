/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 's3-eu-west-1.amazonaws.com', 'cura.healthcare']
  },
  i18n: {
    locales: [ 'ar-AR', 'en-US'],
    defaultLocale: 'ar-AR',
    localeDetection: false,
  },
  trailingSlash: true
}

module.exports = nextConfig
