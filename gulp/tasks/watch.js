import gulp         from 'gulp';

import config       from '../config';


// --------------------------------------------------------
// Watch
// -------------------------------------------------------

gulp.task('watch:all', ['watch:css'], () => {

});

gulp.task('watch:css', ['css:compile'], () => {
	return gulp.watch(config.path.sass.watch, ['css:compile']);
});
