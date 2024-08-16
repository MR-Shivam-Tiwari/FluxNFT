/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'nepalyogahome.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'admin.gitapress.org',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  