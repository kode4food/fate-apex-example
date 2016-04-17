"use strict";

const fatejs = require('gulp-fatejs');

const gulp = require('gulp');
const beautify = require('gulp-beautify');
const rename = require('gulp-rename');

const fateFiles = ['*.fate'];
const destDir = '.';

gulp.task('compile', function () {
  return gulp.src(fateFiles)
             .pipe(fatejs())
             .pipe(beautify({indentSize: 2}))
             .pipe(rename(function (path) {
                path.extname = ".js";
              }))
             .pipe(gulp.dest(destDir));
});

gulp.task('default', ['compile']);
