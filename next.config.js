/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};
// immediately instantiated function expression
const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
