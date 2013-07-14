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
      concat: {
        files: ['css/**/*.less'],
        tasks: ['concat:great'],
        options: { interrupt: true }
      },
      less: {
        files: ['build/great.less'],
        tasks: ['less:all'],
        options: { interrupt: true }
      },
      jshint: {
        files: ['js/**/*.js'],
        tasks: ['jshint'],
        options: { interrupt: true }
      },
      yuiConfig: {
        files: ['js/**/*.js'],
        tasks: ['yuiConfig:development'],
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
    },
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

    // JSHint
    jshint: {
      options: {
        curly: false,
        camelcase: false,
        eqeqeq: true,
        browser: true,
        indent: 2,
        newcap: true,
        undef: true,
        unused: true,
        trailing: true,
        sub: true,
        maxlen: 120,
        globals: {
          YUI: true,
          Tmpl: true
        }
      },
      files: {
        src: [
          'js/great.js',
          'js/app/**/*.js'
        ]
      }
    },

    // Generation of the YUI config file
    yuiConfig: {
      development: {
        options: {
          dest:       'js/yui_config.js',
          root:       "js/vendor/yui3/3.10.1/build/",
          base:       "/js/vendor/yui3/3.10.1/build/",
          comboBase:  "/combobot/y/&",
          combine:    true,
          groups: {
            app: {
              comboBase:  "/combobot/{{hash}}/&",
              combine: false,
              root: '',
              base: '/',
              modules: [
                'js/app/**/*.js',
                'js/lib/*.js',
                'js/great.js'
              ],
              processPath: function (p) {
                return p.replace('public/', '');
              }
            }
          }
        }
      }
    },

    // Bower asset management
    bower: {
      dev: {
        options: {
          targetDir: './js/vendor',
          layout: 'byType',
          install: false,
          verbose: true,
          cleanTargetDir: false,
          cleanBowerDir: false
        }
      }
    }
  });

  grunt.registerTask('lessify', ['concat:great', 'less:all']);
  grunt.registerTask('bootstrap', ['lessify', 'handlebars', 'yuiConfig:development']);
  grunt.registerTask('build', ['lessify', 'cssmin', 'handlebars', 'uglify']);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-yui-config');
  grunt.loadNpmTasks('grunt-bower-task');

};
