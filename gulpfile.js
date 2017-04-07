var elixir = require('laravel-elixir');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');

gulp.src(['build/static/js/*.js'])
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/js'));

gulp.src(['build/static/css/*.css'])
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/css'));

elixir(function(mix) {
    mix.version(['css/style.css','js/bundle.js']);
});

gulp.src(['build'], {read: false})
    .pipe(rimraf());
