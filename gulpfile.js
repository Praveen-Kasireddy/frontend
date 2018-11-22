const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const handlebars = require('gulp-compile-handlebars');
const webpack = require('webpack-stream');
const rename = require('gulp-rename');

gulp.task('style', function () {
    gulp.src('src/assets/scss/*.scss')
        .pipe(sass())
        .on('error', gutil.log)
        .pipe(gulp.dest('dist/css'));
});

// This will be called from two places.
// The first parameter is given by gulp, the second is given by us
// (whether to watch for file changes or just compile once).
const js = (cb, watch) => {
    gulp.src('src/assets/polyfill.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('node_modules/jquery-contextmenu/dist/**/*')
        .pipe(gulp.dest('dist/jquery-contextmenu'));

    gulp.src('src/assets/multi-hash-map/**/*')
        .pipe(gulp.dest('dist/multi-hash-map'));

    gulp.src('node_modules/popper.js/dist/umd/**/*')
        .pipe(gulp.dest('dist/popper.js'));

    gulp.src('node_modules/tooltip.js/dist/umd/**/*')
        .pipe(gulp.dest('dist/tooltip.js'));

    gulp.src('node_modules/jquery-ui-dist/**/*')
        .pipe(gulp.dest('dist/jquery-ui-dist'));

    gulp.src('node_modules/jquery-ui-dist/**/*')
        .pipe(gulp.dest('dist/jquery-ui-dist'));

    gulp.src('node_modules/bootstrap-slider/dist/**/*')
        .pipe(gulp.dest('dist/bootstrap-slider'));

    gulp.src('node_modules/babel-polyfill/dist/polyfill.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('node_modules/jquery-ui-dist/jquery-ui.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('node_modules/chroma-js/chroma.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('node_modules/sortablejs/Sortable.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('node_modules/highcharts/highcharts.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('node_modules/mathjs/dist/math.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('src/assets/js/entry.js')
        .pipe(sourcemaps.init())
        .pipe(webpack(Object.assign({}, require('./webpack.config'), {watch: watch})))
        .on('error', gutil.log)
        .pipe(gulp.dest('dist/js'));
};

gulp.task('js', js);

gulp.task('handlebars', function () {
    const templateData = {
        assetVersion: Math.floor(Math.random() * Math.floor(999999999))
    };
    const options = {
        partials: {},
        batch: ['./src/assets/handlebars/partials'],
        helpers: {}
    };

    return gulp.src('src/assets/handlebars/index.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['style', 'js', 'handlebars']);

gulp.task('watch', function () {
    gulp.watch('src/assets/scss/**/*.scss', ['style']);
    gulp.watch('src/assets/handlebars/**/*.hbs', ['handlebars']);

    // Call JS with watch=true.
    js(null, true);
});
