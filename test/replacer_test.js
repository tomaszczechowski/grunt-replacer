"use strict";

var grunt = require('grunt');

exports.replacer = {
    main: function(test) {

        var expect, result;

        expect = 'Text was replaced';
        result = grunt.file.read('test/dist/index.html');
        test.equal(expect, result, 'should replace selected code');

        test.done();
    }
};

