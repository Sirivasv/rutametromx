const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const gulpCopy = require('gulp-copy');
const tslint = require("gulp-tslint");


var sourceHTMLFiles = ['src/html/*.html'];
var sourceServerFiles = ['src/server.js'];
var sourceConfFiles = ['package.json', 'src/Dockerfile'];
var distPath = 'dist/';

gulp.task('lintTS', function() {
 
    return gulp.src("src/typescript/**/*.ts")
        .pipe(tslint({
            formatter: "verbose",
            configuration: "tslint.json"
        }))
        .pipe(tslint.report());

});

gulp.task('buildJS', function() {

    return gulp.src('src/')
        .pipe(gulpWebpack( { mode: "production", ... require('./webpack.config.js') }, webpack))
        .pipe(gulp.dest('dist/javascript/'));
});

gulp.task('copyHTML', function() {

    return gulp
        .src(sourceHTMLFiles)
        .pipe(gulpCopy(distPath, {prefix:1}));

});

gulp.task('copyServer', function() {

    return gulp
        .src(sourceServerFiles)
        .pipe(gulpCopy(distPath, {prefix:1}));

});

gulp.task('copyConf', function() {

    return gulp
        .src(sourceConfFiles)
        .pipe(gulpCopy(distPath, {prefix:1}));

});

gulp.task('default', gulp.series('lintTS', 'buildJS', gulp.parallel('copyHTML', 'copyConf', 'copyServer')));