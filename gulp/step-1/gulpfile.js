var gulp = require('gulp');//引入gulp
var babel = require('gulp-babel');//标准模块化引入方案require
var uglify = require('gulp-uglify');
// 集成 babel编译
// 压缩
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('jsmin', function() {
    return gulp.src(['./src/js/main.js', './src/js/moon.js', './src/js/star.js'])//找到文件
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))//送至目标文件
});

gulp.task('cssmin', function() {
    return gulp.src(['./src/styles/*.css', './src/styles/btn.css'])
    .pipe(concat('all.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('watch', ['jsmin', 'cssmin'], function() {
    gulp.watch('./src/js/*.js', ['jsmin']);
    gulp.watch('./src/styles/*.css', ['cssmin']);
});
gulp.task('default', ['watch']);
