'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpif   = require('gulp-if');
var replace = require('gulp-replace');
var handleErrors = require('../util/handleErrors');

var stringify = require('stringify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var assign = require('lodash.assign');

gulp.task('scripts', function() {});
