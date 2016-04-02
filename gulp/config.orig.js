import util from 'gulp-util';

export default {

  css : {
    main : 'src/sass/main.scss',
    suffix : '.min',
    outputDir : 'src/'
  },

  // TODO: Add FTP settigns here
  ftp : {

  },

  inject : {
    css : {
      files : ['src/main.min.css'],
      to : 'src/index.html'
    },
    js : {
      files : ['src/build.min.js'],
      to : 'src/index.html'
    }
  },

  js : {
    run : './node_modules/.bin/jspm bundle-sfx --minify --no-mangle js/main src/build.min.js'
  },

  watch : {
    css : 'src/sass/**/*.scss',
    js : 'src/js/**/*.js'
  },

  handleError: function(err) {
    util.beep();
    console.log(err);
    this.emit('end');
  },

};
