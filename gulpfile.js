"use strict";

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    del = require('del');

var routes = require('./gulpconfig').routes;
var appRoutes   = routes.app,
    appbasePath = appRoutes.base,
    sassPath    = appRoutes.sass,
    scriptsPath = appRoutes.scripts,
    imagesPath  = appRoutes.images;

var distRoutes = routes.dist,
    distBasePath = distRoutes.base,
    cssPath      = distRoutes.css,
    jsPath       = distRoutes.js,
    imgDistPath  = distRoutes.images;

gulp.task('sass', function() {

    gulp.src( sassPath +"/*.scss", { sourcemap : true })
        .pipe(sass())
        .pipe(gulp.dest( cssPath ))
        .pipe(browserSync.stream());
});

gulp.task('clean', [ 'clean:js', 'clean:css', 'clean:html' ],function () {
    return del([ distBasePath ]);
});

gulp.task('clean:js', function(){
    return del([ jsPath + '/*.js', jsPath ]);
});

gulp.task('clean:css', function(){
    return del([ cssPath + '/*.css', cssPath ]);
});

gulp.task('clean:html', function(){
    return del([ distBasePath + '/*.html' ]);
});

gulp.task('build', ['clean', 'sass', 'minify-html']);

gulp.task('default', ['clean', 'sass']);
