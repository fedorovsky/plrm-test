'use strict';

module.exports = function(gulp, $, CONFIG) {
  /**
   * DEV
   */
  gulp.task('html:dev', function() {
    return gulp.src(CONFIG.PATH.SRC.HTML)
      .pipe($.rigger())
      .pipe($.browserSync.reload({stream:true}))
      .pipe(gulp.dest(CONFIG.PATH.DIST.HTML))
  });
  /**
   * PROD
   */
  gulp.task('html:prod', function() {
    return gulp.src(CONFIG.PATH.SRC.HTML)
      .pipe($.rigger())
      .pipe(gulp.dest(CONFIG.PATH.DIST.HTML));
  });
};
