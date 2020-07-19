const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
                '@primary-color': '#222526',
                '@border-color-base': '#222526',
                '@error-color': '#222526'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};