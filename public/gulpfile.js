var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
//importでフォルダ一括読み込み
var browserify = require('browserify');
var sassGlob = require('gulp-sass-glob');
//developerツールでコンパイル前のsassファイルを確認
var sourcemaps = require('gulp-sourcemaps');
//エラー時にコンパイルを停止させない
var plumber = require('gulp-plumber');
//エラー通知
var notify = require('gulp-notify');
//自動でベンダープレフィックスを付与
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
//CSSファイルを圧縮
var cleanCSS = require('gulp-clean-css');
//rename
var rename = require('gulp-rename');
//画像ファイルを圧縮
var imagemin = require('gulp-imagemin');


gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("エラー: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe(cleanCSS())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});

gulp.task('default', gulp.task('sass'));