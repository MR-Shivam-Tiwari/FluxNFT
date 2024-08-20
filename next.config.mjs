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
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/epubs/',
          publicPath: '/_next/static/epubs/',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
