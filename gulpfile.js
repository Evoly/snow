
'use strict'

const gulp = require ('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rigger = require('gulp-rigger');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const newer = require('gulp-newer');
const browserSync = require('browser-sync');
const svgSprite = require("gulp-svg-sprites");
const svgSymbols = require('gulp-svg-symbols');
const rename = require("gulp-rename");


gulp.task('sass', function(){
    return gulp.src("src/css/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 10'] }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist/css"))
});

gulp.task('clean', function() {
  return del('build')
});

gulp.task('resources', function() {
  return gulp.src(['src/resources/**'], {since: gulp.lastRun('resources')})
      .pipe(newer('dist/resources'))
      .pipe(gulp.dest('dist/resources'))
});

gulp.task('page', function() {
  return gulp.src('src/index.html', {since: gulp.lastRun('page')})
      .pipe(newer('dist'))
      .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**', {since: gulp.lastRun('scripts')})
      .pipe(newer('dist'))
      .pipe(gulp.dest('dist/scripts'))
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('sass','page','resources','scripts'))
);

gulp.task('watch', function() {
  gulp.watch('src', gulp.series('sass'))
  gulp.watch('src/resources/', gulp.series('resources'))
  gulp.watch('src/', gulp.series('page'))
  gulp.watch('src/scripts/', gulp.series('scripts'))
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'dist'
  });

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build',gulp.parallel('watch', 'serve')));
gulp.task('default', gulp.series('dev'));

// gulp.task('svg', function () {
//   return gulp.src('src/resources/images/svg/*.svg')
//   .pipe(svgSprite({selector: "i-sp-%f",
//     svg:{sprite: "svg.svg"},
//     svgPath: "%f",
//     cssFile: "svg_sprite.css",
//     common: "ic"
//   }
//   ))
//   .pipe(gulp.dest('dist'));
// });

// gulp.task('svg', function () {
//   return gulp.src('src/resources/images/svg/*.svg')
//   .pipe(svgSymbols())
//   .pipe(rename(function(file) {
//                 file.basename = 'icons';
//                 return file;
//             }))
//   .pipe(gulp.dest('dist/resources/images/'));
// });
