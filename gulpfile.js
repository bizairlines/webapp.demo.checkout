var config = require('./gulp.config')();

var gulp = require('gulp'),
    angularFileSort = require('gulp-angular-filesort'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    filter = require('gulp-filter'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngHtml2js = require('gulp-ng-html2js'),
    sass = require('gulp-sass'),
    del = require('del'),
    eventStream = require('event-stream'),
    environments = require('gulp-environments'),
    rename = require("gulp-rename"),
    watch = require('gulp-watch'),
    ngConstant = require('gulp-ng-constant'),
    uglifycss = require('gulp-uglifycss'),
    browserSync = require('browser-sync').create(),
    _ = require('lodash');

var destination = environments.production() ? config.release : config.dev;
var env = environments.production() ? 'prod' : 'dev';

gulp.task('clean-dev', cleanDev);
gulp.task('compile', compile);
gulp.task('compile-watch', ['compile'], compileWatch);
gulp.task('dev', ['clean-dev'], compile);
gulp.task('serve', serve);

gulp.task('default', ['dev']);

function cleanDev() {
    return del(destination.index);
}

function compile() {
    return eventStream.merge(
        buildIndex(),
        buildImages(),
        buildFonts(),
        buildMap()
    );
}

function compileWatch(done) {
    browserSync.reload();
    done();
}

function serve() {
    browserSync.init({
        server: {
            baseDir: destination.index,
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    });

    gulp.watch([config.sources.index,
            'src/assets/stylesheets/**/*.*',
            config.sources.scripts,
            config.sources.templates,
            config.sources.images
        ], ['compile-watch']);

}

function buildIndex() {
    var baseObj = {
        relative: true
    };

    if (process.env.NODE_ENV === 'production') {
        _.extend(baseObj, {
            relative: false,
            ignorePath: '/public'
        });
    } else {
        _.extend(baseObj, {
            relative: false,
            ignorePath: '/dev'
        });
    }

    var templates = _.extend(_.clone(baseObj), {
        name: 'templates'
    });
    var vendor = _.extend(_.clone(baseObj), {
        name: 'vendor'
    });
    var constants = _.extend(_.clone(baseObj), {
        name: 'constants'
    });

    return gulp.src(config.sources.index)
        .pipe(inject(buildScripts(), baseObj))
        .pipe(inject(buildTemplates(), templates))
        .pipe(inject(setConstants(), constants))
        .pipe(inject(buildVendorScripts(), vendor))
        .pipe(inject(buildVendorStyles(), vendor))
        .pipe(inject(buildStyles(), baseObj))
        .pipe(gulp.dest(destination.index))
        .on('error', handleError);
}

function buildImages() {
    return gulp.src(config.sources.images)
        .pipe(gulp.dest(destination.images));
}

function buildFonts() {
    return gulp.src(config.sources.fonts)
        .pipe(gulp.dest(destination.fonts));
}

function buildMap() {
    return gulp.src(config.sources.map)
        .pipe(gulp.dest(destination.map));
}

function buildScripts() {
    return gulp.src(config.sources.scripts)
        .pipe(angularFileSort())
        .on('error', handleError)
        .pipe(ngAnnotate())
        .pipe(environments.production(concat('app.js')))
        .pipe(environments.production(renameFile('app-', '.js')))
        .pipe(environments.production(uglify()))
        .pipe(gulp.dest(destination.scripts));
}

function buildTemplates() {
    return gulp.src(config.sources.templates)
        .pipe(ngHtml2js({moduleName: 'templates'}))
        .pipe(concat('templates.js'))
        .pipe(environments.production(renameFile('templates-', '.js')))
        .pipe(environments.production(uglify()))
        .pipe(gulp.dest(destination.templates));
}

function buildStyles() {
    return gulp.src(config.sources.stylesheets)
        .pipe(sass())
        .on('error', handleError)
        .pipe(concat('app.css'))
        .pipe(environments.production(renameFile('app-', '.css')))
        .pipe(gulp.dest(destination.stylesheets));
}

function buildVendorScripts() {
    return gulp.src(config.sources.vendors.scripts)
        .pipe(concat('vendor.js'))
        .pipe(environments.production(renameFile('vendor-', '.js')))
        .pipe(gulp.dest(destination.vendors));
}

function buildVendorStyles() {
    return gulp.src(config.sources.vendors.styles)
        .pipe(concat('vendor.css'))
        .pipe(uglifycss())
        .pipe(environments.production(renameFile('vendor-', '.css')))
        .pipe(gulp.dest(destination.stylesheets));
}

function renameFile(basename, extname) {
    return rename({
        basename: basename,
        suffix: +new Date(),
        extname: extname
    })
}

function setConstants() {

    var envConst = require('./config/' +  env + '.json');
    
    return ngConstant({
            name : 'EnvConstants',
            constants: envConst,
            stream: true
        })
    .pipe(environments.production(uglify()))
    .pipe(gulp.dest(destination.scripts));
}

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}


