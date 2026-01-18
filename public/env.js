(function (global) {

  var baseUrl = '%REMOTES_BASE_URL%';

  var login = '%LOGIN_REMOTE%';
  var main = '%MAIN_REMOTE%';

  // Helper: treat unreplaced placeholders as empty
  function clearIfPlaceholder(value) {
    return typeof value === 'string' && value.indexOf('%') === 0 ? '' : value;
  }

  baseUrl = clearIfPlaceholder(baseUrl) || '';
  login = clearIfPlaceholder(login) || '';
  main = clearIfPlaceholder(main) || '';

  // Helper: remove trailing slash to avoid double slashes
  function trimTrailingSlash(url) {
    return typeof url === 'string' ? url.replace(/\/+$/, '') : url;
  }

  baseUrl = trimTrailingSlash(baseUrl);

  var injected = global.__ENV__ || {};
  var injectedBase = injected.REMOTES_BASE_URL ? trimTrailingSlash(injected.REMOTES_BASE_URL) : '';
  var injectedLogin = injected.LOGIN_REMOTE || '';
  var injectedMain = injected.MAIN_REMOTE || '';

  var loginRemote =
    injectedLogin ||
    login ||
    (injectedBase ? injectedBase + '/loginApp/remoteEntry.js' : '') ||
    (baseUrl ? baseUrl + '/loginApp/remoteEntry.js' : '') ||
    'http://localhost:4201/remoteEntry.js';

  var mainRemote =
    injectedMain ||
    main ||
    (injectedBase ? injectedBase + '/mainApp/remoteEntry.js' : '') ||
    (baseUrl ? baseUrl + '/mainApp/remoteEntry.js' : '') ||
    'http://localhost:4202/remoteEntry.js';

  global.__REMOTE_ENTRIES__ = {
    loginApp: loginRemote,
    mainApp: mainRemote,
  };
})(window);
