/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Linphone',
    description: 'Softphone para Kasm.',
    icon: 'https://cdn.worldvectorlogo.com/logos/lorem-lorem-1.svghttps://cdn.worldvectorlogo.com/logos/lorem-lorem-1.svg',
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
