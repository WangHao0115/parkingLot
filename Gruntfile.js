"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        mochaTest: {
            test: {
                options: {
                    reporter: "spec"
                },
                src: ["./test/specs/*Spec.js"]
            }
        },
    });

    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.registerTask("test", ["mochaTest"]);

};
