/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static export for GitHub Pages compatibility
  output: 'export',
  // Disable trailing slash for cleaner URLs
  trailingSlash: false,
}

export default nextConfig
