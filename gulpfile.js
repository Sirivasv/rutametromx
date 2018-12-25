const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const gulpCopy = require('gulp-copy');
const tslint = require("gulp-tslint");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");


var sourceHTMLFiles = ['src/html/*.html'];
var sourceServerFiles = ['src/server/**/*.ts'];
var sourceConfFiles = ['package.json', 'src/Dockerfile'];
var distPath = 'dist/';
var sourcePath = 'src/';

gulp.task('lintTS', function() {
 
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: "verbose",
            configuration: "tslint.json"
        }))
        .pipe(tslint.report());

});

gulp.task('buildJS', function() {

    return gulp.src(sourcePath)
        .pipe(gulpWebpack( { mode: "production", ... require('./webpack.config.js') }, webpack))
        .pipe(gulp.dest(distPath + 'javascript/'));
});

gulp.task('buildServer', function(){

    return gulp.src(sourceServerFiles)
        .pipe(tsProject())
        .js.pipe(gulp.dest(distPath + "server/"));
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

gulp.task('default', gulp.series('lintTS', 'buildJS', 'buildServer', gulp.parallel('copyHTML', 'copyConf')));