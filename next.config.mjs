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
  webpack: (config) => {
    // Adding a rule to handle .epub files
    config.module.rules.push({
      test: /\.epub$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/epubs/[name][ext]', // File output structure
      },
    });

    return config;
  },
};

export default nextConfig;
