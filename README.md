# grunt-stylelint-reporter
[![Build Status](https://travis-ci.org/35n139e/grunt-stylelint-reporter.svg?branch=develop)](https://travis-ci.org/35n139e/grunt-stylelint-reporter)

> The best Grunt plugin ever.

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
            ports: 5963,
            outputJson:{
                flag:false,
                path:'test/test.json'
            }
        }
    }
});
```

### Options

#### options.temp
Type: `String`
Default value: `'test/template.ejs'`
ejs template file

#### options.files
Type: `String`
Default value: `'test/test.css'`

lint target css or scss files

#### options.syntax
Type: `String`
Default value: `'css'`
if lint target scss , `'scss'`

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
Default value: `'test/test.json'`
json output file path


### Usage Examples



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
