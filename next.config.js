const nextra = require("nextra");

// Support both CommonJS and ESM default exports from nextra
const withNextra = (nextra?.default ?? nextra)({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  pageExtensions: ["ts", "tsx", "mdx"],
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = withNextra(nextConfig);
