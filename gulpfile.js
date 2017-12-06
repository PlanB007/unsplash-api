var gulp = require ('gulp');
var sass = require ('gulp-sass');
var browserSync = require ('browser-sync').create();
var webpack = require ('webpack-stream');


gulp.task('sass', function(){
  gulp.src('./assets/scss/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/assets/css/'))
})

gulp.task('js', function(){
  gulp.src('./assets/js/main.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('./public/assets/js'))
})

gulp.task('html', function(){
  gulp.src('./index.html')
  .pipe(gulp.dest('./public/'))
})

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: './public'
    }
  })

  gulp.watch('./assets/scss/**/*.scss', ['sass'])
  gulp.watch('./assets/js/**/*.js', ['js'])
  gulp.watch('./index.html', ['html'])
})

gulp.task('default', ['sass', 'js', 'html', 'server'])
