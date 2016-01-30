var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('live-server', function(){
  var server = new LiveServer('server/server.js');
  server.start();
})

gulp.task('bundle', function(){
  return browserify({
    entries: 'app/main.js',
    debug: true
  })
  .transform(babelify, { presets: ['es2015', 'react'] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/js'))
})

gulp.task('serve', ['bundle, live-server'], function(){
  browserSync.init(null, {
    proxy: "http://localhost:7777",
    port: 9001
  });
})
