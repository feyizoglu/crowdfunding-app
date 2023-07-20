/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "assets.api.uizard.io",
      "firebasestorage.googleapis.com",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
