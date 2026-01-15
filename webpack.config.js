const { shareAll, withModuleFederationPlugin, withRemoteDefinitionsPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "loginApp": "loginApp@http://localhost:4201/remoteEntry.js", 
    "mainApp": "mainApp@http://localhost:4202/remoteEntry.js",  
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
