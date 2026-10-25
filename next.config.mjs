/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dev-server chunks separate from production build chunks. Sharing `.next`
  // across `next dev` and `next build/start` can leave stale module references.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
