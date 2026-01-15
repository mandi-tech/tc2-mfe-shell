/*
  Runtime remote entries configuration file.

  This file contains placeholders that can be replaced at container start
  (or CI/CD) with actual remoteEntry URLs for different environments.

  Example replacement (in a Linux container entrypoint):
    sed -i "s|%LOGIN_REMOTE%|$LOGIN_REMOTE|g" /usr/share/nginx/html/env.js
    sed -i "s|%MAIN_REMOTE%|$MAIN_REMOTE|g" /usr/share/nginx/html/env.js

  It exposes a global `window.__REMOTE_ENTRIES__` used by the host.
*/
(function (global) {
  // placeholders may remain unreplaced in local dev. If placeholder
  // pattern (starts with %) is present, treat it as empty so fallback applies.
  var login = '%LOGIN_REMOTE%';
  var main = '%MAIN_REMOTE%';

  if (typeof login === 'string' && login.indexOf('%') === 0) {
    login = '';
  }
  if (typeof main === 'string' && main.indexOf('%') === 0) {
    main = '';
  }

  global.__REMOTE_ENTRIES__ = {
    loginApp: login || 'http://localhost:4201/remoteEntry.js',
    mainApp: main || 'http://localhost:4202/remoteEntry.js',
  };
})(window);
