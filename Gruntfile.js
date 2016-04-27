var jsHeader = "/*                                  \n\
	 _ _      _       _                             \n\
 ___| (_) ___| | __  (_)___                         \n\
/ __| | |/ __| |/ /  | / __|                        \n\
\__ \ | | (__|   < _ | \__ \                        \n\
|___/_|_|\___|_|\_(_)/ |___/                        \n\
				   |__/                             \n\
                                                    \n\
 Version: 1.5.9                                     \n\
  Author: Ken Wheeler                               \n\
 Website: http://kenwheeler.github.io               \n\
	Docs: http://kenwheeler.github.io/slick         \n\
	Repo: http://github.com/kenwheeler/slick        \n\
  Issues: http://github.com/kenwheeler/slick/issues \n\
                                                    \n\
 */\n\n";

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: jsHeader
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