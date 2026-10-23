import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Next inlines full source maps into the studio bundle, which makes the
      // browser chunk about 40MB and the loader times out.
      config.plugins = config.plugins?.filter((plugin) => plugin?.constructor?.name !== "EvalSourceMapDevToolPlugin");
      config.output.chunkLoadTimeout = 300000;
    }
    return config;
  },
  async redirects() {
    return [
      { source: "/features", destination: "/product", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/about-us", destination: "/", permanent: true },
      { source: "/support", destination: "/book-a-demo", permanent: true },
      { source: "/contact", destination: "/book-a-demo", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/whatsapp", destination: "/product#coming-soon", permanent: true },
    ];
  },
};

export default nextConfig;
