import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // IMPORTANT: Replace 'your-repo-name' with the name of your GitHub repository.
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devServer: {
    allowedDevOrigins: [
      'https://6000-firebase-studio-1756459260056.cluster-6vyo4gb53jczovun3dxslzjahs.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
