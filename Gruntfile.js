module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['css/styles.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('test', ['jshint', 'csslint']);
};
