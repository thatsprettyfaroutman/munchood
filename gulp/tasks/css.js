import gulp         from 'gulp';
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
		.src(config.css.main)
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
			suffix : config.css.suffix
		}))
		.pipe(gulp.dest(config.css.outputDir));
});
