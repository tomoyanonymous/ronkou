var gulp = require('gulp');
var shell = require('gulp-shell');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

var compile =  function() {
  var options = {

  };
  var reportOptions = {
    err: true, // default = true, false means don't write err
    stderr: true, // default = true, false means don't write stderr
    stdout: true // default = true, false means don't write stdout
  };
  gulp.src('md/document.md')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(shell('npm run compile'));
    }

var watch = function(){
    gulp.watch('md/document.md', compile);
};
gulp.task('default',watch);
