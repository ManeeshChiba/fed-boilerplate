'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sassLint     = require('gulp-sass-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    handleErrors = require('../util/handleErrors');

gulp.task('styles', function () {

  return gulp.src('src/scss/**/*.scss')
    .pipe(sassLint({
      configFile: '../scss-lint.yml'
    }))
    .pipe(sassLint.format())
    .on('error', handleErrors)
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