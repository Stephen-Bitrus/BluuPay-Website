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
      config.plugins = config.plugins?.filter(
        (plugin: { constructor?: { name?: string } }) => plugin?.constructor?.name !== "EvalSourceMapDevToolPlugin",
      );
      config.output.chunkLoadTimeout = 300000;
    }
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/features", destination: "/product", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/about-us", destination: "/", permanent: true },
      { source: "/support", destination: "/book-a-demo", permanent: true },
      { source: "/contact", destination: "/book-a-demo", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/whatsapp", destination: "/product#coming-soon", permanent: true },
    ];
  },
};

export default nextConfig;
