var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var changed = require('gulp-changed');
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
//CSSファイルを圧縮
var cleanCSS = require('gulp-clean-css');
//rename
var rename = require('gulp-rename');
//画像ファイルを圧縮
var imagemin = require('gulp-imagemin');


//sassをコンパイル
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

//画像圧縮
//圧縮前（ソース）と圧縮後のファイルを定義
var src = 'src/img';//圧縮前
var dist = 'dist/img';//圧縮後
gulp.task('imagemin', function() {
  var srcFile = src + '/**/*.+(jpg|jpeg|png|gif)';
  return gulp.src(srcFile)
    .pipe(changed(dist))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]
  ))
  .pipe(gulp.dest(dist))
});

//監視
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
  gulp.watch(src, gulp.task('imagemin'));
});

gulp.task('default', gulp.task('sass'));