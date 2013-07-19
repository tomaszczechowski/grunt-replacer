/*
 * Grunt Replacer
 * https://github.com/tomaszczechowski/grunt-replacer
 *
 * Copyright (c) 2013 Tomasz Czechowski
 * Licensed under the MIT license.
 *
 */

module.exports = function (grunt) {

    'use strict';

    grunt.registerMultiTask('replacer', 'Replace code in files.', function () {

        var options = this.options();

        this.files.forEach(function(filePair) {
            filePair.src.forEach(function(src) {
                grunt.file.copy(src, filePair.dest, {
                    process: function(content) {
                        var from, to, regex;
                        for(var i in options.replace) {
                            from = i; to = options.replace[i];
                            regex = new RegExp(from,'g');
                            content = content.replace(regex,to);
                            grunt.log.writeln('Replace in ' + src + ': ' + from + ' to: '+ to);
                        }
                        return content;
                    }
                });
            });
        });
    });
};