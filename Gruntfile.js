/*
* grunt-stylelint-reporter
* https://github.com/35n139e/grunt-stylelint-reporter
*
* Copyright (c) 2015 35n139e
* Licensed under the MIT license.
*/

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		reporter: {
			options: {
				temp: 'test/template.ejs',
				files: 'test/test.css',
				syntax: 'css',
				configFile: 'test/stylelintConfig',
				ports: 5963,
				outputJson:{
					flag:true,
					path:'test/test.json'
				}
			}
		}
	});
	grunt.loadTasks('tasks');
	grunt.registerTask('report', 'reporter');
};
