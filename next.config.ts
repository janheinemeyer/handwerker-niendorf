import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile higher up in the home directory makes Turbopack guess the
  // wrong workspace root. Pin it to this project.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
