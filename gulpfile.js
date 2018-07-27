const gulp = require('gulp')
const browserSync    = require('browser-sync')

gulp.task('browser-sync', function() {
  browserSync({
    // proxy: 'http://pars.ru',
    notify: false,
    ghostMode: false,
    files: ['public/*.html'],
    server: {
      baseDir: "public/",
    },
  });
});
gulp.task('default', ['browser-sync']);