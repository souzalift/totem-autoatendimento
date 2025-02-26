import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  },
};

export default nextConfig;
