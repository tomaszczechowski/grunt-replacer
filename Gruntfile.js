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

    // Project configuration.
    grunt.initConfig({
        replacer: {
            index: {
                options : {
                    replace: {
                        '<!-- to-replace -->' : 'was replaced'
                    }
                },
                files : [
                    {src: ['test/index.html'], dest: 'test/dist/index.html'}
                ]
            }
        },

        jshint: {
            options: {
                jshintrc : '.jshintrc'
            },
            files: [
                'Gruntfile.js',
                'tasks/*.js',
                'test/*.js'
            ]
        },

        nodeunit: {
            files: ['test/*.js']
        },

        clean: {
            dist: 'test/dist/*'
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');


    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'replacer', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
