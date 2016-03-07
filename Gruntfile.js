/*
 * grunt-audero-lsg
 * https://github.com/AurelioDeRosa/grunt-audero-lsg
 *
 * Copyright (c) 2016 Aurelio De Rosa
 * Licensed under the MIT, GPL-3.0 licenses.
 */

'use strict';

module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
      jshint: {
         options: {
            jshintrc: '.jshintrc'
         },
         all: [
            'Gruntfile.js',
            'tasks/*.js'
         ]
      },

      jscs: {
         options: {
            config: '.jscsrc',
            fix: true
         },
         all: [
            'Gruntfile.js',
            'tasks/*.js'
         ]
      },

      // Before generating any new files, remove any previously-created files.
      clean: {
         tests: ['tmp']
      },

      // Configuration to be run (and then tested).
      lsg: {
         all: {
            files: {
               'tmp/audero-style-guide.html': ['test/fixtures/audero-1.css', 'test/fixtures/audero-2.css'],
               'tmp/google-style-guide.html': 'test/fixtures/google.css',
               'tmp/yahoo-style-guide.html': 'test/fixtures/yahoo.css'
            }
         }
      }
   });

   // Actually load this plugin's task(s).
   grunt.loadTasks('tasks');

   // These plugins provide necessary tasks.
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-jscs');
   grunt.loadNpmTasks('grunt-contrib-clean');

   grunt.registerTask('lint', ['jshint', 'jscs']);

   grunt.registerTask('default', [
      'clean',
      'lint',
      'lsg'
   ]);
};