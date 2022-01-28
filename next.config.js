require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API_TOKEN: process.env.GRAPHQL_API_TOKEN,
    vfSiteId: "277741123835796",
    vfSiteUUID: "00000000-0000-4000-8000-fc9aa5069794",
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};
