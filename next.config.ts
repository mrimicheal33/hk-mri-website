import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      {
        source: "/products/chison-sonoeye",
        destination: "/products/sonoeye",
        permanent: true,
      },
      {
        source: "/products/chison",
        destination: "/products/sonoeye",
        permanent: true,
      },
      {
        source: "/brands/chison",
        destination: "/products/sonoeye",
        permanent: true,
      },
      {
        source: "/products/mindray",
        destination: "/brands/mindray",
        permanent: true,
      },
      {
        source: "/products/united-imaging",
        destination: "/brands/united-imaging",
        permanent: true,
      },
      {
        source: "/products/perlove",
        destination: "/brands/perlove",
        permanent: true,
      },
      {
        source: "/brands/ilivtouch",
        destination: "/products/mini800",
        permanent: true,
      },
      {
        source: "/brands/hisky",
        destination: "/products/mini800",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
