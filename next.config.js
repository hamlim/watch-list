let { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
let withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
module.exports = withVanillaExtract({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Don't seem to work 😞
    // concurrentFeatures: true,
    // serverComponents: true,
  },
})
