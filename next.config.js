// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ moved here (no longer under experimental)
  typedRoutes: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Example if you load images from GitHub avatars or Unsplash
      // { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      // { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

module.exports = nextConfig;
