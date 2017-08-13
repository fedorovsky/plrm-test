'use strict';

module.exports = function (gulp, $, CONFIG) {
  /**
   * SPRITE DEV
   */
  gulp.task('sprite:dev', function () {
    const spriteData = gulp.src(CONFIG.PATH.SRC.SPRITE).pipe($.spritesmith({
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      cssName: '_sprite.scss',
      padding: 5,
      cssFormat: 'scss'
    }));

    const imgStream = spriteData.img.pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
    const cssStream = spriteData.css.pipe(gulp.dest(CONFIG.PATH.SRC.STYLES.SPRITE));

    return $.merge(imgStream, cssStream);
  });
  /**
   * SPRITE PROD
   */
  gulp.task('sprite:prod', function () {
    const spriteData = gulp.src(CONFIG.PATH.SRC.SPRITE).pipe($.spritesmith({
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      cssName: '_sprite.scss',
      cssFormat: 'scss'
    }));

    const imgStream = spriteData.img.pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
    const cssStream = spriteData.css.pipe(gulp.dest(CONFIG.PATH.SRC.STYLES.SPRITE));

    return $.merge(imgStream, cssStream);
  });
  /**
   * SVG SPRITE
   */
  gulp.task('svg:sprite', function () {
    return gulp.src(CONFIG.PATH.SRC.SVG_SPRITE)
      .pipe($.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.cheerio({
        run: function ($) {
          // $('[fill]').removeAttr('fill');
          // $('[stroke]').removeAttr('stroke');
          // $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe($.replace('&gt;', '>'))
      .pipe($.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg",
            example: true
          }
        }
      }))
      .pipe(gulp.dest(CONFIG.PATH.DIST.IMG));
  });


};
