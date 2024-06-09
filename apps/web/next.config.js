import { fileURLToPath } from 'node:url';
import bundleAnalyzerPlugin from '@next/bundle-analyzer';

import createJiti from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('@orbitkit/env/web');

const withBundleAnalyzer = bundleAnalyzerPlugin({
  enabled: process.env['ANALYZE'] === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@orbitkit/db',
    '@orbitkit/auth',
    '@orbitkit/env',
    '@orbitkit/api',
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withBundleAnalyzer(nextConfig);
