import gulp         from 'gulp';
import shell        from 'gulp-shell';

import config       from '../config';


// --------------------------------------------------------
// JS compile
// --------------------------------------------------------

gulp.task('js:compile', shell.task(config.js.run));
