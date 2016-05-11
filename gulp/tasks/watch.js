'use strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('watch', function() {

  gulp.watch('src/*.html',  ['html']);
  gulp.watch('src/scss/**/*.scss',  ['styles','scsslint']);
  gulp.watch('src/img/**/*',  ['images']);
  // JS changes are monitored via watchify in scripts.js
});