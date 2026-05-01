/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@repo/components", "@repo/utils", "@repo/config"],
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = nextConfig;
