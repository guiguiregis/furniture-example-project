/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: [
      'images.ctfassets.net',
      'cdn.shopify.com',
      'downloads.ctfassets.net',
      'content.cylindo.com',
      'viewer.cylindo.com',
      'videos.ctfassets.net',
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
