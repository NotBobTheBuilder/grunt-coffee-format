# grunt-coffee-format

> Grunt task for coffee-fmt, a coffeescript formatter

[![NPM](https://nodei.co/npm/grunt-coffee-format.png)](https://nodei.co/npm/grunt-coffee-format/)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-coffee-format --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-coffee-format');
```

## The "coffee_format" task

### Overview
In your project's Gruntfile, add a section named `coffee_format` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  coffee_format: {
    main: {
      files: {
        src: ['src/**/*.coffee']
      }
    }
  }
});
```

### Options

#### options.tab
Type: `String`
Default value: `  ` (two spaces)

String value used for indentation. Could be a tab, or arbitrary number of spaces.

#### options.newLine
Type: `String`
Default value: `\n`

String value used for newLines. Defaults to `\n` newline character.

### Usage Examples

```js
grunt.initConfig({
  coffee_format: {
    main: {
      files: {
        src: ['tmp/main']
      }
    }
  }
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  coffee_format: {
    main: {
      options: {
        tab: '\t'
      },
      files: {
        src: ['tmp/main']
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

1.0 : Codename “Three Legged Table”
