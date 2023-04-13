'use strict';

const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
// const concatCss = require('gulp-concat-css');


exports.sass = function () {
    return src('./styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(concatCss("styles/bundle.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./styles/dist'));
};

exports.watch = function () {
    watch('./styles/*.scss', series('sass'));
};