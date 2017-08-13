'use strict';

const gulp       = require('gulp');
const requireDir = require('require-dir');
const $          = require('gulp-load-plugins')();

$.browserSync = require("browser-sync").create();
$.path        = require('path');
$.merge       = require('merge-stream');
$.del         = require('del');

const SRC  = './src';
const DIST = './dist';

const CONFIG = {
  GULP_DEBUG: false,
  SERVE: false,
  PATH: {
    SRC: {
      ROOT: SRC,
      HTML: `${SRC}/*.html`,
      HTML_WATCH: `${SRC}/**/*.html`,
      FONTS: `${SRC}/fonts/**/*.*`,
      IMG: [`${SRC}/img/**/*.*`, `!${SRC}/img/sprite/**/*.*`],
      SPRITE: `${SRC}/img/sprite/**/*.+(png|jpg)`,
      SVG_SPRITE: `${SRC}/img/sprite/svg/*.svg`,
      STYLES: {
        SASS: [
          `${SRC}/sass/*.scss`,
          `${SRC}/sass/blocks/*.scss`
        ],
        SPRITE: `${SRC}/sass/`
      },
      COPY: [
        `${SRC}/favicon.ico`,
        `${SRC}/apple-touch-icon.png`
      ]
    },
    DIST: {
      ROOT: DIST,
      HTML: `${DIST}/`,
      FONTS: `${DIST}/fonts/`,
      IMG: `${DIST}/img/`,
      STYLES: {
        CSS: `${DIST}/css/`
      }
    }
  }
};

// Load application tasks
(function () {
  let dir = requireDir('./tasks');
  Object.keys(dir).forEach(function (key) {
    dir[key] = dir[key](gulp, $, CONFIG);
  });
}());

/**
 * Developer tasks
 */
gulp.task('dev', gulp.series('clean', gulp.parallel('copy', 'html:dev', 'sprite:dev', 'svg:sprite', 'styles:dev', 'fonts:dev', 'img:dev', 'webpack'), 'sizereport'));
gulp.task('dev:watch', gulp.series('dev', gulp.parallel('watch', 'webpack:watch')));

/**
 * Production tasks
 */
gulp.task('prod', gulp.series('clean', gulp.parallel('copy', 'html:prod', 'sprite:prod', 'svg:sprite', 'styles:prod', 'webpack', 'fonts:prod', 'img:prod'), 'sizereport:prod'));
