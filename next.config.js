const withImages = require("next-images");

module.exports = withImages({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  domains: [
    {
      domain: "danieldeveloper.dev",
      defaultLocale: "es",
    },
  ],
  reactStrictMode: true,
});
