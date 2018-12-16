const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const gulpCopy = require('gulp-copy');

var sourceHTMLFiles = ['src/html/*.html'];
var sourceConfFiles = ['./package.json'];
var distPath = 'dist/';

gulp.task('buildJS', function () {
    return gulp.src('src/')
        .pipe(gulpWebpack( { mode: "development", ... require('./webpack.config.js') }, webpack))
        .pipe(gulp.dest('dist/javascript/'));
});

gulp.task('copyHTML', function() {

    return gulp
        .src(sourceHTMLFiles)
        .pipe(gulpCopy(distPath, {prefix:1}));

});

gulp.task('copyConf', function() {

    return gulp
        .src(sourceConfFiles)
        .pipe(gulpCopy(distPath, {prefix:1}));

});

gulp.task('default', gulp.parallel('buildJS', 'copyHTML', 'copyConf'));