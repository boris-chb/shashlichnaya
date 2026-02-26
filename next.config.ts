import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.storage.yandex.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "downloader.disk.yandex.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.yandex.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sun9-**.userapi.com",
        pathname: "/s/**",
      },
    ],
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.csv": {
        loaders: [
          {
            loader: "csv-loader",
            options: {
              dynamicTyping: true,
              header: true,
              skipEmptyLines: true,
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
