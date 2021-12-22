const { series, parallel } = require('gulp');
const { images, svg } = require('@malven/gulp-tasks');

global.GULP_CONFIG = {
  paths: {
    dist: 'web/dist/',
    templateSrc: 'templates/',
    imageSrc: 'src/images/',
    imageDist: 'web/dist/images/',
  },
};

// Export tasks that you'd like to run directly
exports.images = images;
exports.svg = svg;

// Export default task
exports.default = series(
  parallel(
    images,
    svg,
  ),
  function(done) {
    done();
  },
);
