/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
*/

/*========== REQUIRED LIBS ==========*/
import gulp from 'gulp';
import sass from 'gulp-sass';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';
import watchify from 'watchify';

/*========== PATH ==========*/
const SRC = 'src',
      DIST = 'dist',
      PATH = {
        SCSS: SRC + '/css/**/*.scss',
        SCRIPT: SRC + '/js/'
      },

      /*========== TASK ==========*/
      DEPENDENCIES = [
        'babel-polyfill',
        'ext-react',
        'd3',
        'react',
        'react-dom'
      ],

      /*========== TASK ==========*/
      TASK = {
        COPY: 'copy',
        STYLE: 'style',
        FRAMEWORK: 'framework',
        SCRIPT: 'script'
      };

gulp.task(TASK.COPY, () => {
  gulp.src('./node_modules/ext-react/dist/**/*.css').pipe(gulp.dest(DIST));
});

gulp.task(TASK.STYLE, () => {
  return gulp.src(PATH.SCSS)
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(gulp.dest(DIST));
});

gulp.task(TASK.FRAMEWORK, () => {
  process.env.NODE_ENV = 'production';
  const bundler = browserify({ debug: false });
  DEPENDENCIES.forEach(lib => bundler.require(lib));
  return bundler.bundle()
    .pipe(source('framework.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(DIST));
});

gulp.task(TASK.SCRIPT, () => {
  const bundler = bundler || watchify(browserify({
    entries: PATH.SCRIPT + 'app.js',
    transform: [babelify],
    extensions: ['.jsx', '.js'],
    debug: true,
    cache: {},
    packageCache: {}
  }));
  DEPENDENCIES.forEach(function (lib) { bundler.external(lib); });
  return bundler.bundle()
    .on('error', function (err) { console.error(err.toString()); this.emit('end'); })
    .pipe(source('app.js'))
    .pipe(gulp.dest(DIST));
});

gulp.task('default', [TASK.STYLE, TASK.SCRIPT], () => {
  // trigger for new or deleted files
  // 2 things to get this working:
  //  - Avoid ./ in the file/folder patterns
  //  - Ensure ./ in the value for cwd
  const watchOpt = { cwd: './' };
  gulp.watch(PATH.SCSS, watchOpt, [TASK.STYLE]);
  gulp.watch([`${PATH.SCRIPT}/**/*.js`, `${PATH.SCRIPT}/**/*.jsx`], watchOpt, [TASK.SCRIPT]);
});