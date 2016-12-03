module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            // js: {
            //     files: ['source/js/**'],
            //     tasks: ['uglify:buildmin'],
            //     options: {
            //         livereload: true
            //     }
            // },
            css: {
                files: ['source/sass/**'],
                tasks: ['sass:compressd', 'sass:expanded']
            }
        },
        sass: {
            compressd: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'source/css/main_style.min.css': 'source/sass/main_style.scss'
                }
            },
            expanded: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'source/css/main_style.css': 'source/sass/main_style.scss'
                }
            }
        },
        // uglify: {
        //     options: {
        //         mangle: false,
        //         preserveComments: 'all'
        //     },
        //     buildmin: {
        //         options: {
        //             report: "min"
        //         },
        //         files: {
        //             'public/js/script.min.js': ['bower_components/jquery/dist/jquery.min.js', 'bower_components/jquery_lazyload/jquery.lazyload.js', 'source/js/script.js'],
        //         }
        //     },
        //     buildexp: {
        //         files: {
        //             'public/js/script.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/jquery_lazyload/jquery.lazyload.js', 'source/js/script.js'],
        //         }
        //     }
        // },
        concurrent: {
            // tasks: ['watch', 'sass:compressd', 'sass:expanded', 'uglify:buildmin', 'uglify:buildexp'],
            tasks: ['watch', 'sass:compressd', 'sass:expanded'],
            options: {
                logCuncurrentOutput: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.option('force', true);
    grunt.registerTask('default', ['concurrent']);
};