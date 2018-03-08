/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
*/

/*========== REQUIRED LIBS ==========*/
import gulp from 'gulp';

gulp.task('vendor', () => {
  gulp.src('./node_modules/bootstrap/dist/**/*')
      .pipe(gulp.dest('dist/libs'));
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('dist/libs/js'));
});