'use strict';

var gulp     = require('gulp');
var handleErrors = require('../util/handleErrors');

// Compiles HTML includes
gulp.task('html', function() {

  return gulp.src(['src/*.html'])
    .on('error', handleErrors)
    .pipe(gulp.dest(global.destination));
});