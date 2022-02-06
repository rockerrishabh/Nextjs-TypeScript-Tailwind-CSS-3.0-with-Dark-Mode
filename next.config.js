/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  pwa: {
    // pwa output folder
    dest: "public",
    //
    // Other configurations:
    // ...
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
