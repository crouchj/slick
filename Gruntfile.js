module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				// banner: jsHeader
			},
			build: {
				files: {
					'slick/slick.min.js' : ['slick/slick.js']
				}
			}
		},

		watch: {
			js: {
				files: ['slick/slick.js'],
				tasks: ['uglify:build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify:build']);

};