'use strict';

module.exports = function(gulp, $, CONFIG) {
  /**
   * COPY
   */
  gulp.task('copy', function() {
    return gulp.src(CONFIG.PATH.SRC.COPY, {since: gulp.lastRun('copy')})
      .pipe(gulp.dest(CONFIG.PATH.DIST.ROOT));
  });
};
