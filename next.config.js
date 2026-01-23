const nextra = require("nextra");

// Support both CommonJS and ESM default exports from nextra
const withNextra = (nextra?.default ?? nextra)({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  pageExtensions: ["ts", "tsx", "mdx"]
};

module.exports = withNextra(nextConfig);
