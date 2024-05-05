module.exports = {
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/scss/_variables.scss";
          @import "src/assets/scss/_mixins.scss";
          @import "src/assets/scss/font/index.scss";
          @import "src/assets/scss/_reset.scss";
        `,
      },
    },
  },
};
