/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    }
}
// immediately instantiated function expression
const withMDX = require("@next/mdx")();


module.exports = withMDX(nextConfig)
