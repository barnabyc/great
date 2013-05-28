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
      }

      // @todo don't run cssmin in dev mode
      // cssMinif: {
      //   files: ['build/great.css'],
      //   tasks: ['cssmin'],
      //   options: { interrupt: true }
      // }
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
          'build/great.css': 'build/great.less',
          'css/great.css': 'build/great.less'
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
    },

    // UglifyJS
    uglify: {
      greatApp: {
        files: {
          'js/great-modules.min.js': [
            'js/list_view.js',
            'js/lists_view.js'
          ],
          'js/great.min.js'    : [ 'js/great.js' ],
          'js/templates.min.js': [ 'js/templates.js' ]
        }
      }
    }
    // uglify: {
    //   greatApp: {
    //     files: [
    //       {
    //         expand: true,     // Enable dynamic expansion.
    //         cwd: 'js/',       // Src matches are relative to this path.
    //         src: ['**/*.js'], // Actual pattern(s) to match.
    //         dest: 'build/',   // Destination path prefix.
    //         ext: '.min.js',   // Dest filepaths will have this extension.
    //       },
    //     ],
    //   }
    // }

  });

  grunt.registerTask('lessify', ['concat:great', 'less:all']);
  grunt.registerTask('bootstrap', ['lessify', 'handlebars']);
  grunt.registerTask('build', ['lessify', 'cssmin', 'handlebars', 'uglify']);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');

};
