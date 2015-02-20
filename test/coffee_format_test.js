'use strict';

var grunt = require('grunt');


exports.coffee_format = {
  main: function(test) {
    var actual = grunt.file.read('tmp/main');
    var expected = grunt.file.read('test/expected/main');
    test.equal(actual, expected, 'Expect prettified coffeescript');

    test.done();
  }
};
