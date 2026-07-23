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
        source: "/products/sonoeye/p1",
        destination: "/products/sonoeye#probes",
        permanent: true,
      },
      {
        source: "/products/sonoeye/p6",
        destination: "/products/sonoeye#probes",
        permanent: true,
      },
      {
        source: "/products/mindray",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/brands/mindray",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/hepatus-5",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/consona-n6",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/consona-n7",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/consona-n9",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/digieye-330",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/digieye-350",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/digieye-680",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/mobieye-700",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/united-imaging",
        destination: "/brands/united-imaging",
        permanent: true,
      },
      {
        source: "/products/perlove",
        destination: "/products/vet1120",
        permanent: true,
      },
      {
        source: "/brands/perlove",
        destination: "/products/vet1120",
        permanent: true,
      },
      {
        source: "/products/vetoo",
        destination: "/products/vf1",
        permanent: true,
      },
      {
        source: "/brands/vetoo",
        destination: "/products/vf1",
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
      {
        source: "/brands/sinomdt",
        destination: "/products/navigator-3000a",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
