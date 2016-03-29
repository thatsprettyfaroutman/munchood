import util from 'gulp-util';

export default {
  path: {
    src : 'src',

    sass: {
      watch: 'src/sass/**/*.scss',
      main: 'src/sass/main.scss',
			output: 'src/',
    },
  },

  handleError: function(err) {
		util.beep();
		console.log(err);
		this.emit('end');
	}
};
