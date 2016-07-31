module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        options: {
          // Replace all 'use strict' statements in the code with a single one at the top
          banner : "(function (){\n  'use strict';",
          footer : "})();\n",
          process: function (src) {
            var processedSrc = src.replace(/(^|\n)[ \t]*('use strict'|"use strict");/g, '');
            processedSrc = processedSrc.replace(/(\(function\s*\(\)\s*\{)/, '');
            processedSrc = processedSrc.replace(/(\}\)\(\));/, '');
            return processedSrc;
          }
        },
        files  : {
          'kt-angular-util.js': ['js/module-inject.js', 'js/components/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  // grunt.registerTask('concat', ['concat']);
};
