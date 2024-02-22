/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Linphone',
    description: 'Softphone para Kasm.',
    icon: '/img/logo.svg',
    listUrl: 'https://alexandierg.github.io/kasm/',
    contactUrl: 'https://github.com/alexandierg/kasm/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
