module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // File watchers
    watch: {
      templates: {
        files: [
          "templates/**/*.hbs"
        ],
        tasks: ['handlebars'],
        options: {
          interrupt: false
        }
      },
      concatLess: {
        files: ['css/**/*.less'],
        tasks: ['concat:great'],
        options: { interrupt: true }
      },
      less: {
        files: ['build/great.less'],
        tasks: ['less:all'],
        options: { interrupt: true }
      },

      // @todo don't run cssmin in dev mode
      cssMinif: {
        files: ['build/great.css'],
        tasks: ['cssmin'],
        options: { interrupt: true }
      }
    },

    // CSS Concatination
    concat: {
      great: {
        src: [
          'css/**/*.less'
        ],
        dest: 'build/great.less'
      }
    },

    // LESS
    less: {
      all: {
        options: { paths: ["css"] },
        files: {
          'build/great.css': 'build/great.less'
        }
      }
    },

    // CSS minifier
    cssmin: {
      compress: {
        files: {
          'css/great.css': ['build/great.css']
        }
      }
    },

    // Handlebars compilation
    handlebars: {
      compile: {
        options: {
          wrapped: true,
          namespace: 'Tmpl',
          processName: function (filename) {
            return filename.replace('templates/', '').replace('.hbs', '');
          }
        },
        files: {
          "js/templates.js": "templates/**/*.hbs"
        }
      }
    }

  });

  grunt.registerTask('lessify', ['concat:great', 'less:all']);
  grunt.registerTask('bootstrap', ['lessify', 'handlebars']);
  grunt.registerTask('build', ['lessify', 'cssmin', 'handlebars']);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

};
