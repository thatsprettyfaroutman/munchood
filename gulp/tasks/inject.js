import gulp         from 'gulp';
import inject       from 'gulp-inject';

import config       from '../config';


// --------------------------------------------------------
// Inject
// --------------------------------------------------------

gulp.task('inject', (done) => {

  let handledKeys = [];
  let filePathSuffix = '?build=' + Date.now();

  let handleItems = (key) => {
    if ( !key ) {
      done();
      return false;
    }

    let item = config.inject[key];
    let files = gulp.src(item.files, { read : false });
    let toDir = item.to.split('/');
    toDir.pop();
    toDir = toDir.join('/') + '/';

    gulp.src(item.to)
      .pipe(inject(files, {
        name : key,
        transform : (filePath) => {

          let ext = filePath.split('.');
          ext = ext[ext.length - 1];
          ext = ext.toLowerCase();

          let actualFilePath = filePath.replace('src/', '');

          switch (ext) {
            case 'css':
              return '<link rel="stylesheet" href="' + actualFilePath + filePathSuffix + '" type="text/css">';

            case 'js':
              return '<script src="' + actualFilePath + filePathSuffix + '"></script>';
          }
        }
      }))
      .pipe(gulp.dest(toDir))
      .on('end', () => {
        handleItems(findNextKey());
      });
  }

  let findNextKey = () => {
    for ( let key in config.inject ) {
      if ( handledKeys.indexOf(key) == -1 ) {
        handledKeys.push(key);
        return key;
      }
    }
    return null;
  }

  // Start
  handleItems(findNextKey());

});
