// Process ES6 on the fly
require('babel-core/register');

// Include every file in gulp/scripts
require('require-dir')('gulp/tasks');
