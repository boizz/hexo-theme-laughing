module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      css: {
        files: ['sass/**'],
        tasks: ['sass:compressed', 'sass:expanded']
      }
    },
    sass: {
      compressed: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/main/reset.min.css': 'sass/main.scss',
          'public/mobile/reset.min.css': 'sass/mobile-single.scss',
          'public/native/reset.min.css': 'sass/mobile-native.scss'
        }
      },
      expanded: {
        options: {
          style: 'expanded'
        },
        files: {
          'public/main/reset.css': 'sass/main.scss',
          'public/mobile/reset.css': 'sass/mobile-single.scss',
          'public/native/reset.css': 'sass/mobile-native.scss'
        }
      }
    },
    concurrent: {
      tasks: ['watch', 'sass:compressed', 'sass:expanded'],
      options: {
        logCuncurrentOutput: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.option('force', true);
  grunt.registerTask('default', ['concurrent']);
}