import type {NextConfig} from 'next';

const repoName = 'DR.Sabir_SHAH';

const nextConfig: NextConfig = {
  output: 'export',
  // IMPORTANT: Replace 'your-repo-name' with the name of your GitHub repository.
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
