var gulp = require('gulp');  
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');

gulp.task('sass', function(){
    gulp.src('assets/sass/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true, outputStyle: 'compresses'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({browsers: ['last 2 versions', '> 5%', 'Firefox ESR']}))
        .pipe(gulp.dest('assets/css'))
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

gulp.task('default', ['pug', 'sass', 'browser-sync'], function(){
    gulp.watch(["assets/sass/**/*.sass", "assets/sass/**/*.css"], ["sass"]);
    gulp.watch("assets/pugfiles/**/*.pug", ["pug"]);
    gulp.watch("assets/js/**/*.js", browserSync.reload);
    gulp.watch("./*.html", browserSync.reload);
    gulp.watch("assets/css/*.css", browserSync.reload);
});

gulp.task