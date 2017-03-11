/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
*/

/*========== REQUIRED LIBS ==========*/
import gulp from 'gulp';
import del from 'del';
import sass from 'gulp-sass';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';

/*========== PATH ==========*/
const DIST = 'dist',
      SRC = 'src',
      PATH = {
        LIBS: DIST + '/libs',
        SCSS: SRC + '/sass/**/*.scss',
        CSS: DIST + '/css',
        SCRIPT: SRC + '/es',
        JS: DIST + '/js'
      },

/*========== TASK ==========*/
      DEPENDENCIES = [
        'babel-polyfill',
        'c3',
        'jquery',
        'tether',
        'react',
        'react-dom',
        'react-router'
      ],

/*========== TASK ==========*/
      TASK = {
        DEL: 'del',
        COPY: 'copy',
        STYLE: 'style',
        FRAMEWORK: 'framework',
        SCRIPT: 'script'
      };

gulp.task(TASK.DEL, () => {
  del([PATH.LIBS + '*']);
});

gulp.task(TASK.COPY, () => {
  gulp.src('./node_modules/bootstrap/dist/**/*').pipe(gulp.dest(PATH.LIBS));
  gulp.src('./node_modules/c3/*.css').pipe(gulp.dest(PATH.LIBS + '/css'));
  gulp.src('./node_modules/font-awesome/css/**/*').pipe(gulp.dest(PATH.LIBS + '/css'));
  gulp.src('./node_modules/font-awesome/fonts/**/*').pipe(gulp.dest(PATH.LIBS + '/fonts'));
});

gulp.task(TASK.STYLE, () => {
  return gulp.src(PATH.SCSS)
      .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
      .pipe(gulp.dest(PATH.CSS));
});

gulp.task(TASK.FRAMEWORK, () => {
  process.env.NODE_ENV = 'production';
  const bundler = browserify({ debug: false });
  DEPENDENCIES.forEach(lib => bundler.require(lib));
  return bundler.bundle()
      .pipe(source('framework.min.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest(PATH.LIBS + '/js'));
});

gulp.task(TASK.SCRIPT, () => {
  const bundler = browserify({
    entries: PATH.SCRIPT + '/app.jsx',
    transform: [babelify],
    extensions: ['.jsx', '.js'],
    debug: true,
    cache: {},
    packageCache: {}
  });
  DEPENDENCIES.forEach(function (lib) { bundler.external(lib); });
  return bundler.bundle()
      .on('error', function (err) { console.log(err.message); this.emit('end'); })
      .pipe(source('app.js'))
      .pipe(gulp.dest(PATH.JS));
});

gulp.task('default', [TASK.STYLE, TASK.SCRIPT], () => {
  // trigger for new or deleted files
  // 2 things to get this working:
  //  - Avoid ./ in the file/folder patterns
  //  - Ensure ./ in the value for cwd
  const watchOpt = { cwd: './' };
  gulp.watch(PATH.SCSS, watchOpt, [TASK.STYLE]);
  gulp.watch([PATH.SCRIPT + '/**/*.js', PATH.SCRIPT + '/**/*.jsx'], watchOpt, [TASK.SCRIPT]);
});