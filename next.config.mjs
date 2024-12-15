/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.thehungrybites.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kcet.brightspotcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
