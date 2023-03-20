/** @type {import('next').NextConfig} */

const { version } = require('./package.json');

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline: false,
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkOnly',
    },
  ],
  reloadOnOnline: false,
});

module.exports = withPWA({
  output: "standalone", env: {
    VERSION: version,
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: true,
  }
});
