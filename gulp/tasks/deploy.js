import gulp    from 'gulp';
import util    from 'gulp-util';
import ftp     from 'vinyl-ftp';
import confirm from 'gulp-confirm';
import plumber from 'gulp-plumber';
import rename  from 'gulp-rename';

import config  from '../config';


// --------------------------------------------------------
// Deploy
// --------------------------------------------------------

gulp.task( 'deploy', done => {

  if (
    !config.deploy ||
    !config.deploy.connection ||
    !config.deploy.globs ||
    config.deploy.globs.length == 0 ||
    config.deploy.connection.host == ''
  ) {
    util.log('config.deploy not set up properly');
    done();
    return false;
  }

  let conn = ftp.create( config.deploy.connection );

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp
    .src(config.deploy.globs, {
      base: config.deploy.base,
      buffer: false
    })
    .pipe(plumber({
      errorHandler : config.handleError
    }))
    .pipe( confirm({
      question: 'Gonna push to production, u sure? (y/n)',
      input: '_key:y'
    }) )
    .pipe( rename(path => {
      if ( path.basename == 'index.min' && path.extname == '.html' ) {
        path.basename = 'index'
      }
    }) )
    .pipe( conn.newer( config.deploy.destination ) ) // only upload newer files
    .pipe( conn.dest( config.deploy.destination ) );

} );
