/*
 * grunt-contrib-requirejs
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    // Configuration to be run (and then tested).
    requirejs: {
      compile: {
        options: {
          baseUrl: './js',
         // name: 'Modular Backbone',
          mainConfigFile: './js/main.js',
          include: ["main"],
          out: 'js/dist/build.js'
        }
      },
    },
    concat: {
	  options: {
	    // define a string to put between each file in the concatenated output
	    separator: ';'
	  },
	  dist: {
	    // the files to concatenate
	    src: ['js/**/*.js'],
	    // the location of the resulting JS file
	    dest: 'js/dist/concated.js'
	  }
	},
	jshint: {
      files: [ 'js/app/common/*.js', 'js/app/models/**/*.js', 'js/app/utilities/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          //jQuery: true,
          //console: true,
         // module: true,
          //document: true
        }
      }
    },

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('build_prod', ['requirejs', 'jshint']);
  
  grunt.registerTask('hinting', ['jshint']);
  
  //grunt.registerTask('concat', ['concat']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test', 'concat']);

};
