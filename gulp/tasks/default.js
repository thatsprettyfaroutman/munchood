import gulp         from 'gulp';
import runSequence  from 'run-sequence';


// --------------------------------------------------------
// Default
// --------------------------------------------------------

gulp.task('default', (done) => {
	runSequence(
		['css:compile', 'js:compile'],
		'inject',
		'html:minify',
		done
	);
});
