// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: false,
// };

// export default nextConfig;

import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx$/,
  mdxRs: true, // REQUIRED for Next.js 15
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
