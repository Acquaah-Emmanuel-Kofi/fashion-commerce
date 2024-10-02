/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.fashionghana.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
