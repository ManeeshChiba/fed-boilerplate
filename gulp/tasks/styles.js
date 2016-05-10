'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function () {

  return gulp.src('src/scss/**/*.scss')
    .pipe( sass({
      sourceComments: (global.mode === 'dev') ? true : false,
      outputStyle: (global.mode === 'dev') ? 'nested': 'compressed',
      errLogToConsole: true
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 1%', 'ie 9', 'ie 10']
    }))
    .pipe( gulp.dest(global.destination + '/css') );
});