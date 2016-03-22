var gulp = require('gulp');

var gulp_if = require('gulp-if');

var htmlmin  = require('gulp-htmlmin');
var cssnano  = require('gulp-cssnano');
var uglifyjs = require('gulp-uglify');
var svgmin   = require('gulp-svgmin');
var optipng  = require('gulp-optipng');

gulp.task('default', [
  'html',
  'css',
  'svg',
  'png',
  'jpg',
  'bower',
]);

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
  return gulp.src('assets/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('svg', function() {
  return gulp.src('assets/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('png', function() {
  return gulp.src('assets/*.png')
    .pipe(optipng())
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('jpg', function() {
  return gulp.src('assets/*.jpg')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('bower', function() {
  return gulp.src('bower_components/**/*')
    .pipe(gulp_if('*.js', uglifyjs()))
    .pipe(gulp.dest('dist/bower_components'));
});