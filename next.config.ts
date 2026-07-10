import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Serve the local brand images as-is instead of running Next.js' on-the-fly
  // image optimizer (`/_next/image`). That optimizer decodes every requested
  // image into memory with `sharp` on each unique size/format request, which is
  // the single biggest RAM/CPU consumer under a traffic burst (e.g. paid ads).
  // Every <Image> in this site points at a static, already-sized file in
  // /public, so on-the-fly optimization adds cost without a real benefit.
  // Disabling it keeps the container's memory footprint flat as traffic scales,
  // which directly cuts Cloud Run's GB-seconds (memory x time) billing.
  images: {
    unoptimized: true,
  },
  // Let browsers and any CDN in front of Cloud Run cache the static image and
  // font assets so repeat/ad traffic is served from cache instead of waking the
  // container. Assets are content-stable brand images; a one-day fresh window
  // with a week of stale-while-revalidate keeps updates flowing without hitting
  // the origin on every hit.
  async headers() {
    return [
      {
        source: '/:path*\\.(jpg|jpeg|png|webp|gif|svg|ico|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
