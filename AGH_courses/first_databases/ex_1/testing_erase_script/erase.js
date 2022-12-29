const shell = require('shelljs');

shell.find('.').forEach(function(file) {
  if (file.match(/\.js$/) || file.match(/\.pug$/)) {
    if ( file !== "erase.js") {
    shell.rm(file);
    }
  }
});