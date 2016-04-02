import gulp         from 'gulp';

import config       from '../config';


// --------------------------------------------------------
// Watch
// -------------------------------------------------------

gulp.task('watch', ['watch:css', 'watch:js'], () => {

});

gulp.task('watch:css', ['css:compile'], () => {
	return gulp.watch(config.watch.css, ['css:compile']);
});

gulp.task('watch:js', ['js:compile'], () => {
	return gulp.watch(config.watch.js, ['js:compile']);
});
