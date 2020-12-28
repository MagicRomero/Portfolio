const withImages = require("next-images");

module.exports = withImages({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  reactStrictMode: true,
});
