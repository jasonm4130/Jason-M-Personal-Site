var gulp = require('gulp');  
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('sass', function(){
    gulp.src('assets/sass/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true, outputStyle: 'compresses'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({browsers: ['last 2 versions', '> 5%', 'Firefox ESR']}))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('pug', function(){
    return gulp.src('assets/pugfiles/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
});

gulp.task('scripts', function() {
  return gulp.src(['assets/js/jquery-1.11.1.js', 'assets/js/bootstrap.min.js', 'assets/js/jquery.easing.min.js', 'assets/js/jquery.easypiechart.js', 'assets/js/classie.js', 'assets/js/cbpAnimatedHeader.js', 'assets/js/waypoints.min.js', 'assets/js/jquery.animateNumber.min.js', 'assets/js/wow.min.js', 'assets/js/jqBootstrapValidation.js', 'assets/js/contact_me.js'])
  .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js/'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
});

gulp.task('default', ['pug', 'sass', 'scripts', 'browser-sync'], function(){
    gulp.watch(["assets/sass/**/*.sass", "assets/sass/**/*.css"], ["sass"]);
    gulp.watch("assets/pugfiles/**/*.pug", ["pug"]);
    gulp.watch("assets/js/**/*.js", browserSync.reload);
    gulp.watch("./*.html", browserSync.reload);
    gulp.watch("assets/js/**/*.js", browserSync.reload);
});

gulp.task('build', function(done){
  runSequence(['pug', 'sass'], ['scripts']);
});