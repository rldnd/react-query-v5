import NextBundleAnalyzer from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";

const withBundleAnalyzer = NextBundleAnalyzer({ enabled: false });

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withPlugins([withBundleAnalyzer], nextConfig);
