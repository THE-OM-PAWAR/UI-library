/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/components', '@repo/utils', '@repo/config'],
};

module.exports = nextConfig;
