const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  domains: [
    {
      domain: "danieldeveloper.dev",
      defaultLocale: "es",
    },
    {
      domain: "localhost",
      defaultLocale: "es",
    },
  ],
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
});
