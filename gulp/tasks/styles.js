'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sassLint     = require('gulp-sass-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    rev          = require('gulp-rev'),
    gulpif       = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps'),
    handleErrors = require('../util/handleErrors'),
    browserSync = require('browser-sync');

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
    .pipe( sourcemaps.init())
    .pipe( gulpif(global.mode !== 'dev', rev()))
    .pipe( sourcemaps.write())
    .pipe( gulp.dest(global.destination + '/css'))
    .pipe( rev.manifest({merge: true}))
    .pipe( gulpif(global.mode !== 'dev', gulp.dest('./dev/maps') ));
});