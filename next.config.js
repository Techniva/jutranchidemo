/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/jutdemo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jutdemo/' : '',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig 