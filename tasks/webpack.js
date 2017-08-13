var webpack       = require('webpack');
var webpackConfig = require('../webpack.config');

module.exports = function(gulp, $) {

  function handler(err, stats, cb) {
    var errors = stats.compilation.errors;

    if (err) throw new $.util.PluginError('webpack', err);

    if (errors.length > 0) {
      $.notify.onError({
        title: 'Webpack Error',
        message: '<%= error.message %>',
        sound: 'Submarine'
      }).call(null, errors[0]);
    }

    $.util.log('[webpack]', stats.toString({
      colors: true,
      chunks: false
    }));

    if (typeof cb === 'function') cb();
  }

  gulp.task('webpack', function(cb) {
    webpack(webpackConfig).run(function(err, stats) {
      handler(err, stats, cb);
    });
  });

  gulp.task('webpack:watch', function() {
    webpack(webpackConfig).watch({
      aggregateTimeout: 100,
      poll: false
    }, handler);
  });
};
