require('dotenv').config();
const withTM = require('next-transpile-modules');

module.exports = withTM({
  sassLoaderOptions: {
      includePaths: ["./src"]
  },
  devIndicators: {
    autoPrerender: true,
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000,
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
  },
  apiCalls: {
    localServerUrl: '',
    prodServerUrl: '',
  },
});
