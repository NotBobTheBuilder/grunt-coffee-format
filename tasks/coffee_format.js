/*
 * grunt-coffee-format
 * https://github.com/jack/grunt-coffee-format
 *
 * Copyright (c) 2015 Jack Wearden
 * Licensed under the MIT license.
 */

'use strict';

var fmt = require('coffee-fmt');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('coffee_format', 'Grunt task for coffee-fmt, a coffeescript formatter', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      tab: ' ',
      newLine: '\n'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath) {
        grunt.file.write(filepath, fmt.format(grunt.file.read(filepath).toString(), options));
      });
    });
  });

};
