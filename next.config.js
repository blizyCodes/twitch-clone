/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "robohash.org" },
      { protocol: "https", hostname: "ytcjeqeqzbgyxkdnkrvi.supabase.co" },
      { protocol: "https", hostname: "static-cdn.jtvnw.net" },
    ],
  },
};

module.exports = nextConfig;
