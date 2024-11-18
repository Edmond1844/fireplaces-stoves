// import gulp from 'gulp';
// import plumber from 'gulp-plumber';
// import less from 'gulp-less';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';
// import browser from 'browser-sync';
// // import concat from 'gulp-concat';
// // import babel from 'gulp-babel'; 

// // Styles

// export const styles = () => {
//   return gulp.src('source/less/style.less', { sourcemaps: true })
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(postcss([
//       autoprefixer()
//     ]))
//     .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
//     .pipe(browser.stream());
// }

// // Scripts

// // export const scripts = () => {
// //   return gulp.src('source/js/**/*.js') 
// //     .pipe(plumber())
// //     .pipe(concat('main.js')) 
// //     .pipe(gulp.dest('source/js'));
// // }

// // Server

// const server = (done) => {
//   browser.init({
//     server: {
//       baseDir: 'source'
//     },
//     cors: true,
//     notify: false,
//     ui: false,
//   });
//   done();
// }

// // Watcher

// const watcher = () => {
//   gulp.watch('source/less/**/*.less', gulp.series(styles));
//   // gulp.watch('source/js/**/*.js', gulp.series(scripts)); 
//   gulp.watch('source/*.html').on('change', browser.reload);
// }

// // Экспорт по умолчанию

// export default gulp.series(
//   gulp.parallel(styles, scripts), 
//   server, 
//   watcher
// );


import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  styles, server, watcher
);

