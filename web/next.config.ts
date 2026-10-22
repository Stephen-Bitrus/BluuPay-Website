import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
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
