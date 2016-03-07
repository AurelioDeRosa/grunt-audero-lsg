/*
 * grunt-audero-lsg
 * https://github.com/AurelioDeRosa/grunt-audero-lsg
 *
 * Copyright (c) 2016 Aurelio De Rosa
 * Licensed under the MIT, GPL-3.0 licenses.
 */

'use strict';

var StyleGuide = require('audero-lsg');

module.exports = function(grunt) {
   grunt.registerMultiTask('lsg', 'Grunt task for Audero LSG', function() {
      // Iterate over all specified file groups
      this.files.forEach(function(group) {
         // Filter invalid files
         var src = group.src.filter(function(filepath) {
            // Warn on and remove invalid source files (if nonull was set)
            if (!grunt.file.exists(filepath)) {
               grunt.log.warn('Source file "' + filepath + '" not found.');

               return false;
            } else {
               return true;
            }
         });

         var styleGuide = new StyleGuide(src);

         // Write the destination file
         grunt.file.write(group.dest, styleGuide.generateStyleGuide());

         // Print a success message
         grunt.log.writeln('File "' + group.dest + '" created.');
      });
   });
};