module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the sass-loader rule
      const sassRule = webpackConfig.module.rules.find(rule => {
        return rule.oneOf;
      });

      if (sassRule && sassRule.oneOf) {
        const sassLoaderRule = sassRule.oneOf.find(rule => {
          return rule.test && rule.test.toString().includes('scss|sass');
        });

        if (sassLoaderRule && sassLoaderRule.use) {
          const sassLoader = sassLoaderRule.use.find(loader => {
            return loader.loader && loader.loader.includes('sass-loader');
          });

          if (sassLoader) {
            // Silence Sass deprecation warnings
            sassLoader.options = {
              ...sassLoader.options,
              sassOptions: {
                ...(sassLoader.options?.sassOptions || {}),
                silenceDeprecations: ['legacy-js-api', 'import'],
              },
            };
          }
        }
      }

      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    // Fix webpack dev server middleware deprecation
    return {
      ...devServerConfig,
      onBeforeSetupMiddleware: undefined,
      onAfterSetupMiddleware: undefined,
      setupMiddlewares: (middlewares, devServer) => {
        // Custom middleware logic can go here if needed
        return middlewares;
      },
    };
  },
};
