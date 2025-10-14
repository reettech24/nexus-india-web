/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // ✅ enables static export
  images: {
    unoptimized: true,      // ✅ disables Next.js image optimization for static export
  },
  // Optional: add trailingSlash if you want URLs like /about/ instead of /about.html
  // trailingSlash: true,
};

module.exports = nextConfig;
