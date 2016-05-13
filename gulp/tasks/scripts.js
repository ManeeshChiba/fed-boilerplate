'use strict';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	gulpif   = require('gulp-if'),
	replace = require('gulp-replace'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	handleErrors = require('../util/handleErrors');

gulp.task('scripts',['jshints'], function() {
	return gulp.src('src/js/**/*.js')
	.pipe(concat('bundle.js'))
	.pipe(gulpif(global.mode !== 'dev',uglify()))
	.pipe( gulp.dest(global.destination + '/js'))
});

gulp.task('jshints',function(){
	return gulp.src(['src/js/**/*.js', '!src/js/vendor/**/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
});