const config = require('../config');
const gulp = require('gulp');


//
//   BrowserSync
//
//////////////////////////////////////////////////////////////////////

/*
Refreshes browser on file changes and syncs scroll/clicks between devices.
*/

module.exports = gulp.task('browserSync', function() {
  const options = {
    port: 3680,
    open: false,
    ui: false,
  };

  if (config.useProxy) {
    options.proxy = config.proxyUrl;
  } else {
    options.server = {
      baseDir: config.serverBaseDir,
    };
  }

  // Initialize Browsersync
  global.browserSync.init(null, options);
});
