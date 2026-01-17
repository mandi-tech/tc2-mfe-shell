const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const isProd = process.env.NODE_ENV === 'production';

// URLs dos SWA em produção na Azure
const PROD_REMOTES = {
  loginApp: 'loginApp@https://zealous-grass-0c898530f.2.azurestaticapps.net/remoteEntry.js',
  mainApp:  'mainApp@https://purple-river-02631a70f.6.azurestaticapps.net/remoteEntry.js',
};

// Localhost para desenvolvimento
const DEV_REMOTES = {
  loginApp: 'loginApp@http://localhost:4201/remoteEntry.js',
  mainApp:  'mainApp@http://localhost:4202/remoteEntry.js',
};

module.exports = withModuleFederationPlugin({
  remotes: isProd ? PROD_REMOTES : DEV_REMOTES,

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
