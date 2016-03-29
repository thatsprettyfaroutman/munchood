import gulp         from 'gulp';
import gutil        from 'gulp-util';
import sass         from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssnano      from 'gulp-cssnano';
import rename       from 'gulp-rename';
import plumber      from 'gulp-plumber';

import config       from '../config';


// --------------------------------------------------------
// CSS compile
// --------------------------------------------------------

gulp.task('css:compile', () => {
	return gulp
		.src(config.path.sass.main)
		.pipe(plumber({
			errorHandler : config.handleError
		}))
		.pipe(sass())
		.pipe(autoprefixer({
			browsers : ['last 4 versions'],
			cascade : false
		}))
		.pipe(cssnano())
		.pipe(rename({
			suffix : '.min'
		}))
		.pipe(gulp.dest(config.path.sass.output));
});
