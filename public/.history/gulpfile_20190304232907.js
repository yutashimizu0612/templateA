var gulp = require('gulp');
var sass = require('gulp-sass');
//importでフォルダ一括読み込み
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

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("エラー: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});