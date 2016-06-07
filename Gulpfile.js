var gulp = require('gulp');
const zip = require('gulp-zip');
var rename = require("gulp-rename");
var htmlmin = require('gulp-htmlmin');
var emailBuilder = require('gulp-email-builder');

// Wo works as well you Will need to Allow non secure apps at google settings

// var options = {
//  emailTest : {

//    // Your Email
//    email : 'duurval@gmail.com',

//    // Your email Subject
//    subject : 'Email Subject',

//    // Optional
//    transport: {
//      type: 'SMTP',
//      options: {
//        service: 'gmail',
//        auth: {
//          user: 'test@gmail.com',
//          pass: 'secret'
//        }
//      }
//    }
//  }

// };

gulp.task('emailBuilder', function() {
  return gulp.src(['!index.html', '*.html'])
    .pipe(emailBuilder())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});


gulp.task('zip', function() {
  return gulp.src(['index.html', 'images/**'],  {base: '.'})
    .pipe(zip('HTML.zip'))
    .pipe(gulp.dest('./'));
});


gulp.task('default', ['emailBuilder', 'minify', 'zip'] );
