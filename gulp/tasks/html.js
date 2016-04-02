import gulp         from 'gulp';
import htmlmin      from 'gulp-htmlmin';
import rename       from 'gulp-rename';

import config       from '../config';


// --------------------------------------------------------
// HTML minify
// --------------------------------------------------------

gulp.task('html:minify', () => {

	gulp
		.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace : true,
			removeComments : true
		}))
		.pipe(rename({
			suffix : '.min'
		}))
		.pipe(gulp.dest('src/'));

});
