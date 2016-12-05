"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        mochaTest: {
            test: {
                options: {
                    reporter: "list"
                },
                src: ["./test/specs/*Spec.js"]
            }
        },
    });

    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.registerTask("test", ["mochaTest"]);

};
