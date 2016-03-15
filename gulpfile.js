var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    babel = require("gulp-babel"),
    htmlmin = require('gulp-htmlmin'),
    vinylSource = require('vinyl-source-stream'),
    browserify = require('browserify');

var
  jsSrc =           './src/js/',
  jsDist =          './dist/js/',
  cssSrc =           './src/scss/',
  cssDist =          './dist/css/';


gulp.task('styles', function() {
	return sass(cssSrc + '*.scss', { style: 'expanded' })
    .pipe(gulp.dest('css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename('style.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest(cssDist))
});

gulp.task("scripts", function () {
  return browserify({entries: jsSrc +'index.js', debug: true})
    .transform("babelify", { presets: ["react","es2015"] })
    .bundle()
    .pipe(vinylSource('index.js'))
    .pipe(gulp.dest(jsDist));
});

gulp.task("markup", function () {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch( cssSrc + 'styles.scss', ['styles']);
  gulp.watch( 'src/index.html', ['markup']);
  gulp.watch( jsSrc + 'index.js', ['scripts']);
});

gulp.task('default', function() {
    gulp.start('watch','scripts','styles','markup');
});