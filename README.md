# grunt-stylelint-reporter
[![Build Status](https://travis-ci.org/35n139e/grunt-stylelint-reporter.svg?branch=master)](https://travis-ci.org/35n139e/grunt-stylelint-reporter)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stylelint-reporter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stylelint-reporter');
```

## The "reporter" task

### Overview
In your project's Gruntfile, add a section named `reporter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
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
```

### Options

#### options.temp
Type: `String`
Default value: `null`

ejs template file

#### options.files
Type: `String`
Default value: `null`

lint target files

#### options.syntax
Type: `String`
Default value: `'css'`

if lint target scss , `'scss'`

#### options.configFile
Type: `String`
Default value: `null`

If nothing is set , you will see the `.stylelintrc` that are placed directly under the root.
If in case you want to put the config in any directory , please specify a file path from the root as Overview.
(At this time, the extension of the file should be in `.json`, or `.js`, Please do extension is not included in the `configFile`.)

#### options.ports
Type: `Num`
Default value: `5963`
ports

#### options.outputJson

##### options.outputJson.flag
Type: `boolean`
Default value: `false`
if you want json output file,  `true` this.

##### options.outputJson.path
Type: `String`
Default value: `null`
json output file path

## Release History
* 2016-01-06 v0.1.7 Dependencies hotfix.
* 2016-01-06 v0.1.6 ejs template modifired and "stylelint-config-suitcss" deleted.
* 2015-12-21 v0.1.5 A configuration file it has to be specified in any directory.
* 2015-12-17 v0.1.4 package.json bugfix.
* 2015-12-17 v0.1.3 package.json dependencies modifired.
* 2015-12-17 v0.1.2 package.json bugfix.
* 2015-12-17 v0.1.1 Initial release.
