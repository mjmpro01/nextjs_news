/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'news.mjadev.xyz', // Replace with your actual domain(s)
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.xomnhau.com', // Replace with your actual domain(s)
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
