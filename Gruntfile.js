module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  // Project configuration
  grunt.initConfig({

    // Configure ESLint task
    eslint: {
      all: [
        '**/*.js',
        '!node_modules/**'
      ]
    },

    // Configure a run task
    run: {
      index: {
        args: ['store.js']
      }
    }

  })

  // Default tasks
  grunt.registerTask('default', ['eslint', 'run'])
}
