import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
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
    ],
    // unoptimized: true,
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.csv$/,
  //     use: [
  //       {
  //         loader: "csv-loader",
  //         options: {
  //           dynamicTyping: true,
  //           header: true,
  //           skipEmptyLines: true,
  //         },
  //       },
  //     ],
  //   });
  //   return config;
  // },
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
