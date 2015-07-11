# grunt-replacer 

[![NPM][grunt-replacer-icon]][grunt-replacer-url]

[![Build Status][grunt-replacer-ci-image]][grunt-replacer-ci-url]
[![devdependencies][grunt-replacer-devdependencies-image]][grunt-replacer-devdependencies-url]

> Grunt replacer - replace string in files

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-replacer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-replacer');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4)*

## Replacer Task

_Run this task with the `grunt replacer` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

##### variables
Type: `replace`

This option is used to define code which has to be replaced by other one.

```javascript
options : {
    replace: {
        '<!-- to-replace -->'  : 'was replaced',
        'something to replace' : 'was replaced on this',
        '<!-- build-version -->: 'ver 0.1.0'
    }
}
```

Type: `reportError`

This option is used to trow error to grunt log. Default is "false"

```javascript
options : {
    reportError: true
}
```

### Usage Examples

#### Replace string in file

```js
replacer: {
    index: {
        options : {
            replace: {
                '<!-- to-replace -->' : 'was replaced'
            }
        },
        files : [
            {src: ['path/to/file'], dest: 'path/to/output.file'}
        ]
    }
}
```

#### Replace string in file using function response

```js
function(content) { return 'text'; } // @param string - content of replacing file
```

```js
replacer: {
    index: {
        options : {
            replace: {
                '<!-- to-replace -->' : function(content) {
                    return 'was replaced';
                }
            }
        },
        files : [
            {src: ['path/to/file'], dest: 'path/to/output.file'}
        ]
    }
}
```

## Release History
 * 2015-07-11   v0.4.2   Updated dev dependencies
 * 2015-07-03   v0.4.1   Clean up, fixed code formatting
 * 2013-10-20   v0.4.0   New features: colors, reportError and function as "to" param
 * 2013-07-19   v0.1.0   First version of replacer. Replace string in selected files

---

Task submitted by [Tomasz Czechowski](http://czechowski.pl/)

*This file was generated on Fri July 19 2013 12:40:00.*

[grunt-replacer-icon]: https://nodei.co/npm/grunt-replacer.png?downloads=true
[grunt-replacer-url]: https://npmjs.org/package/grunt-replacer
[grunt-replacer-ci-image]: https://secure.travis-ci.org/tomaszczechowski/grunt-replacer.png?branch=master
[grunt-replacer-ci-url]: http://travis-ci.org/tomaszczechowski/grunt-replacer
[grunt-replacer-devdependencies-image]: https://david-dm.org/tomaszczechowski/grunt-replacer/dev-status.png
[grunt-replacer-devdependencies-url]: https://david-dm.org/tomaszczechowski/grunt-replacer#info=devDependencies
