# grunt-audero-lsg

> Grunt task for [Audero LSG](https://github.com/AurelioDeRosa/audero-lsg)

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar
with that process, you may install this plugin with this command:

```shell
npm install grunt-audero-lsg --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-audero-lsg');
```

## The "lsg" task

### Overview

In your project's Gruntfile, add a section named `lsg` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
   lsg: {
      your_target: {
         // Target-specific file lists go here.
      }
   }
});
```

### Usage Examples

#### Single CSS file

The following example shows how to create a style guide defined from a single CSS file:

```js
grunt.initConfig({
   lsg: {
      all: {
         files: {
            'dist/style-guide.html': 'app/style/main.css'
         }
      }
   }
});
```

#### Multiple CSS files

The following example shows how to create a style guide from multiple CSS files:

```js
grunt.initConfig({
   lsg: {
      all: {
         files: {
            'dist/style-guide.html': ['app/style/main.css', 'app/style/style.css']
         }
      }
   }
});
```

## Release History

* 07/03/2016   0.1.0   First official release

## License

[grunt-audero-lsg](https://github.com/AurelioDeRosa/grunt-audero-lsg) is dual licensed under
[MIT](http://www.opensource.org/licenses/MIT) and [GPL-3.0](http://opensource.org/licenses/GPL-3.0).

## Author

[Aurelio De Rosa](https://www.audero.it) ([@AurelioDeRosa](https://twitter.com/AurelioDeRosa))