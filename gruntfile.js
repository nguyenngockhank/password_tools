const grunt = require('grunt');

grunt.initConfig({
    jsdoc : {
        dist : {
            src: ['src/**/*.js'],
            options: {
                destination: 'docs'
            }
        }
    }
});

grunt.loadNpmTasks('grunt-jsdoc');

grunt.registerTask('default', ['jsdoc']);