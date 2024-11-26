import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import rename from 'gulp-rename';


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
};

// Scripts
export const scripts = () => {
  return gulp.src('source/js/**/*.js') 
      .pipe(plumber()) 
      .pipe(concat('script.js')) 
      .pipe(terser()) 
      .pipe(rename('script.min.js'))
      .pipe(gulp.dest('build/js'));
};

// Задача по умолчанию
const build = gulp.series(styles, scripts);

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', gulp.series('scripts'));
});

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
  gulp.watch('source/js/**/*.js', gulp.series(scripts, browser.reload));
}

export default gulp.series(
  styles, scripts, server, watcher
);