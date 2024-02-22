/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Linphone',
    description: 'Softphone para Kasm.',
    icon: 'https://styles.redditmedia.com/t5_pzxlx/styles/profileIcon_snooe518dd85-f77f-4725-ac4a-464846a19b97-headshot.pn',
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
