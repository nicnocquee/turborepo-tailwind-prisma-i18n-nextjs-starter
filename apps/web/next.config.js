const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui", "env", "internationalization"],
  redirects() {
    return [
      {
        source: "/",
        destination: "/de",
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
};
